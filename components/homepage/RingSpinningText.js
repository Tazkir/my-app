import React, { useState, useEffect } from 'react';

const RingSpinningText = ({
  text = 'Welcome to Tazkir furqan portfolio • ',
  spacing = 1,
  size = 0.6,
}) => {
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    const HEADING = document.querySelector('.ring__s');
    const canTrig = CSS.supports('(top: calc(sin(1) * 1px))');

    const genCode = () => `
      .ring__s {
        --char-count: ${charCount};
        --inner-angle: calc((360 / var(--char-count, ${charCount})) * 1deg);
        --character-width: ${spacing.toFixed(1)};
        --radius: calc((var(--character-width, ${spacing.toFixed(1)}) / ${
      canTrig
        ? 'sin(var(--inner-angle))'
        : Math.sin((360 / charCount) * (Math.PI / 180))
    }) * -1ch);
        --font-size: ${size.toFixed(1)}rem;
        font-family: monospace;
        text-transform: uppercase;
        font-size: calc(var(--font-size, 1) * 1rem);
        animation: rotation 6s infinite linear;
        position: relative;
      }
      
      .char {
        display: inline-block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform:
          translate(-50%, -50%)
          rotate(calc(var(--inner-angle) * var(--char-index)))
          translateY(var(--radius));
      }
      
      @keyframes rotation {
        to {
          rotate: -360deg;
        }
      }
    `;

    const onUpdate = () => {
      // 1. Take the text and split it into spans...
      const chars = text.split('');
      setCharCount(chars.length);
      HEADING.innerHTML = '';
      HEADING.style.setProperty('--char-count', chars.length);

      for (let c = 0; c < chars.length; c++) {
        HEADING.innerHTML += `<span aria-hidden="true" class="char" style="--char-index: ${c};">${chars[c]}</span>`;
      }
      HEADING.innerHTML += `<span class="sr-only">${text}</span>`;
      // Set the styles
      HEADING.style.setProperty('--font-size', size);
      HEADING.style.setProperty('--character-width', spacing);
      HEADING.style.setProperty(
        '--radius',
        canTrig
          ? `calc((var(--character-width) / sin(var(--inner-angle))) * -1ch`
          : `calc((${spacing} / ${Math.sin(
              (360 / charCount) * (Math.PI / 180)
            )}) * -1ch)`
      );

      if (HEADING.children.length > 3) {
        document.documentElement.style.setProperty(
          '--buffer',
          canTrig
            ? `calc((${spacing} / sin(${360 / charCount}deg)) * ${size}rem)`
            : `calc((${spacing} / ${Math.sin(
                (360 / charCount) * (Math.PI / 180)
              )}) * ${size}rem)`
        );
      }
    };

    onUpdate();
  }, [charCount, spacing, size, text]);

  return (
    <>
      <style>{`.code-block { display: none; }`}</style>
    </>
  );
};

export default RingSpinningText;
