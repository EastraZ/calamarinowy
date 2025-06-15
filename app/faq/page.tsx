const FAQPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">What is this website about?</h2>
        <p>This website is a platform for sharing and discovering information about various topics.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">How do I create an account?</h2>
        <p>You can create an account by clicking on the "Sign Up" button in the navigation bar.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">How do I search for information?</h2>
        <p>You can use the search bar at the top of the page to search for specific topics or keywords.</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Is there a mobile app available?</h2>
        <p>
          Currently, we do not have a mobile app, but our website is fully responsive and can be accessed on any device.
        </p>
      </div>
    </div>
  )
}

export default FAQPage
