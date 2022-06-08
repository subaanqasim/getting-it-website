const sg = require("@sendgrid/mail")
sg.setApiKey(process.env.SENDGRID_API_KEY)

export default function (req, res) {
  const msg = {
    from: process.env.FROM_EMAIL_ADDRESS,
    to: process.env.TO_EMAIL_ADDRESS,
  }

  try {
    if (req.body) {
      msg.replyTo = req.body.email
      msg.subject = `${req.body.subject} [contactform]`
      msg.text = `New email from ${req.body.email}.\n\n${req.body.message}`
    }

    return sg.send(msg).then(
      () => {
        res.status(200).json({
          message: "Email sent.",
        })
      },
      (error) => {
        console.error(error)
        if (error.response) {
          return res.status(500).json({
            error: error.response,
          })
        }
      }
    )
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: "There was an error", error: err })
  }
}
