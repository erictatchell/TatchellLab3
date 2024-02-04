const messages = {
    HELLO: `Hello`,
    GREET: `! What a beautiful day. Server current date and time is `,
}

exports.greetMsg = (name) => {
    return `${messages.HELLO} ${name}${messages.GREET}`;
}

exports.messages = messages;