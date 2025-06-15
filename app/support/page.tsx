const SupportPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Support</h1>
      <p className="mb-4">
        Welcome to the support page. If you need assistance, please contact us using the information below.
      </p>
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Contact Information</h2>
        <p>Email: support@example.com</p>
        <p>Phone: 555-123-4567</p>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">FAQ</h2>
        <p>Here are some frequently asked questions.</p>
        {/* Add FAQ items here */}
      </div>
    </div>
  )
}

export default SupportPage
