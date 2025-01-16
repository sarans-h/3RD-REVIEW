# testimonials-3rd

A React component package for embedding product testimonials and reviews into your web application. This package works in conjunction with the [Testimonials Platform](https://3-rd-review-flax.vercel.app/) to display and manage customer reviews.

## Features

- Easy integration with React applications
- Customizable dimensions
- Real-time review updates
- Responsive design
- Simple authentication flow

## Installation

Install the package using npm:

```bash
npm install testimonials-3rd
```

Or using yarn:

```bash
yarn add testimonials-3rd
```

## Prerequisites

Before using this package, you need to:

1. Create an account at [Testimonials Platform](https://3-rd-review-flax.vercel.app/)
2. Create a business profile
3. Add your products
4. Obtain your product ID from the dashboard

## Usage

```jsx
import { Embed1 } from 'testimonials-3rd';

function App() {
  return (
    <div>
      <Embed1
        productId="your-product-id-here"
        height="600px"
        width="100%"
      />
    </div>
  );
}
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| productId | string | Yes | - | The unique identifier for your product from the Testimonials Platform |
| height | string | No | "500px" | Height of the testimonials widget |
| width | string | No | "100%" | Width of the testimonials widget |

## Setup Steps

1. **Create Account**
   - Visit [https://3-rd-review-flax.vercel.app/](https://3-rd-review-flax.vercel.app/)
   - Sign up for a new account

2. **Create Business Profile**
   - Log in to your account
   - Navigate to the business section
   - Fill in your business details

3. **Add Products**
   - Go to the products section
   - Click "Add New Product"
   - Fill in the product details
   - Save your product

4. **Implement the Component**
   - Install the package
   - Import the Embed1 component
   - Add it to your React application with the required productId

## Example Implementation

```jsx
import React from 'react';
import { Embed1 } from 'testimonials-3rd';

const ProductPage = () => {
  return (
    <div className="product-reviews">
      <h2>Customer Reviews</h2>
      <Embed1
        productId="prod_123xyz"
        height="600px"
        width="800px"
      />
    </div>
  );
};

export default ProductPage;
```

## Support

For any issues or feature requests, please visit our [GitHub repository](#) or contact our support team through the [Testimonials Platform](https://3-rd-review-flax.vercel.app/).

## License

MIT

---

Made with ❤️ for the web development community