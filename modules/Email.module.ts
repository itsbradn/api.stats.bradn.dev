import SparkPost from 'sparkpost';

const client = new SparkPost();

async function sendCodeTemplate(username: string, email: string, code: string) {
    let transmission = {
        content: {
            template_id: "email-verification",
            from: {
                name: "Bradn Stats",
                email: 'verify@mail.bradn.dev'
            }
        },
        substitution_data: {
            "code": code,
            "url": "https://google.com/".toString(),
        },
        recipients: [
            {
                address: {
                    email: email,
                    name: username
                }
            }
        ]
    }

    await client.transmissions.send(transmission);
}

export {
    sendCodeTemplate
}