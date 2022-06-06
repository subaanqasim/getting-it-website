import React from "react"
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

export default function ContactForm() {
  const { classes, theme } = useStyles()

  return (
    <Paper shadow="md" radius="sm" className={classes.wrapper}>
      <form
        className={classes.form}
        onSubmit={(event) => event.preventDefault()}
      >
        <Text size="lg" weight={700} className={classes.title}>
          Get in touch via email
        </Text>

        <div className={classes.fields}>
          <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
            <TextInput label="Your name" placeholder="Your name" />
            <TextInput label="Your email" placeholder="john@doe.com" required />
          </SimpleGrid>

          <TextInput mt="md" label="Subject" placeholder="Subject" required />

          <Textarea
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
            >
              Send message
            </Button>
          </Group>
        </div>
      </form>
    </Paper>
  )
}
