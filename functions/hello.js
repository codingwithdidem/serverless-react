exports.handler = async function (event, context) {
  const { name } = JSON.parse(event.body)
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello ${name}`,
    }),
  }
}
