export const welcomeUser = data => {
    return sendEmail(data.useremail)
  }
  
  const sendEmail = email => {
    if (!email) {
      console.log('Email is empty, abort.')
      return
    }
  
    const data = {
      personalizations: [{ to: [{ email }] }],
      from: { email:'thomaswang5210@gmail.com'},
      //thomaswang5210@gmail.com
      //john2022060616@163.com
      subject: "Hi nice to meet you, welcome to DEV platform",
     // html: "Welcome, this is Thomas Wang",
      content: [
        {
          type: 'text/html',
          value:
            '<h3>Welcome to DEV@Deakin platform</h3> <p>You will recieve my project update when i post a new project</p>'
        }
      ]
    }
    fetch('/api-sendemail/v3/mail/send', {
      body: JSON.stringify(data), // must match 'Content-Type' header
      // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: 'same-origin', // include, same-origin, *omit
      headers: {
        //OGZHHNZWPFKYKSC
        //Bearer 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
        //Bearer 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
        //'Bearer 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',
        //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
        Authorization: 'Bearer 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',
        'content-type': 'application/json'
      },
      method: 'POST',
      mode: 'cors'
    }).then(() => {
      console.log("success")
    })
  }
