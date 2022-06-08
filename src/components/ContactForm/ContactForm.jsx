import React, { useState } from "react"
import {
  Paper,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
} from "@mantine/core"
import useStyles from "./ContactForm.styles"
import { useFormik } from "formik"
import * as Yup from "yup"
import { showNotification, updateNotification } from "@mantine/notifications"
import { Check, CircleX } from "tabler-icons-react"

export default function ContactForm() {
  const { classes, theme } = useStyles()
  const [isSending, setIsSending] = useState(false)

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().max(100, "Must be 100 characters or less"),
      email: Yup.string().email("Invalid email address").required("Required"),
      subject: Yup.string().required("Please give your message a subject"),
      message: Yup.string().required(
        "Oops, looks like you forgot your message"
      ),
    }),
    onSubmit: async (data) => {
      setIsSending(true)
      showNotification({
        id: "form-submission",
        disallowClose: true,
        autoClose: false,
        loading: true,
        color: "orange",
        title: "Message sending...",
        message: "Some magic is occurring 😶",
      })

      try {
        const res = await fetch("/api/contactForm", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        })

        if (res.ok) {
          formik.resetForm()
          setIsSending(false)
          updateNotification({
            id: "form-submission",
            disallowClose: false,
            autoClose: 6000,
            loading: false,
            title: "Message sent! 🥳",
            message:
              "Your message has been sent successfully and we'll get back to you soon!",
            color: "green",
            icon: <Check />,
          })
        }
      } catch (error) {
        setIsSending(false)
        console.error(error)

        updateNotification({
          id: "form-submission",
          disallowClose: false,
          autoClose: false,
          loading: false,
          title: "Unable to send message 😥",
          message: `An error has occurred. Please try again later, or get in touch via Instagram/Twitter if this problem persists.`,
          color: "red",
          icon: <CircleX />,
        })
      }
    },
  })

  return (
    <Paper shadow="md" radius="sm" className={classes.wrapper}>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <Text size="lg" weight={700} className={classes.title}>
          Get in touch via email
        </Text>

        <div className={classes.fields}>
          <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
            <TextInput
              {...formik.getFieldProps("name")}
              error={
                formik.errors.name && formik.touched.name
                  ? formik.errors.name
                  : ""
              }
              id="name"
              label="Your name"
              placeholder="Your name"
            />
            <TextInput
              {...formik.getFieldProps("email")}
              error={
                formik.errors.email && formik.touched.email
                  ? formik.errors.email
                  : ""
              }
              id="email"
              label="Your email"
              placeholder="john@doe.com"
              required
            />
          </SimpleGrid>

          <TextInput
            {...formik.getFieldProps("subject")}
            error={
              formik.errors.subject && formik.touched.subject
                ? formik.errors.subject
                : ""
            }
            id="subject"
            mt="md"
            label="Subject"
            placeholder="Subject"
            required
          />

          <Textarea
            {...formik.getFieldProps("message")}
            error={
              formik.errors.message && formik.touched.message
                ? formik.errors.message
                : ""
            }
            id="message"
            mt="md"
            label="Your message"
            placeholder="Getting It is deffo the best podcast out there."
            minRows={3}
            maxRows={10}
            required
          />

          <Group position="right" mt="md">
            <Button
              type="submit"
              className={classes.control}
              color={theme.colorScheme === "dark" ? "gray" : "dark"}
              variant="outline"
              loading={isSending}
            >
              Send message
            </Button>
          </Group>
        </div>
      </form>
    </Paper>
  )
}
