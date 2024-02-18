export default function Error404() {
    let msg = 'default message inside Error404'
    try {
      msg = process.env.MY_CUSTOM_SECRET || msg
    } catch {}
    return <h1>{msg}</h1>
  }