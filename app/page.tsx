'use client';

import katex from 'katex';
import 'katex/dist/katex.min.css';

export default function Home() {
  const inline = katex.renderToString(String.raw`\int_0^1 x^2 \, dx`, {
    throwOnError: false,
  });

  const block = katex.renderToString(String.raw`\lim_{n \to \infty} \left(1 + \frac{1}{n} \right)^n = e`, {
    displayMode: true,
    throwOnError: false,
  });

  return (
    <main style={{ padding: '2rem' }}>
      <h1>🧮 Welcome to My Math Site</h1>

      <p>
        Here is an inline formula:{' '}
        <span dangerouslySetInnerHTML={{ __html: inline }} />
      </p>

      <p>And here is a block formula:</p>
      <div dangerouslySetInnerHTML={{ __html: block }} />
    </main>
  );
}
