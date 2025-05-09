"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const path = usePathname();
  const [count, setCount] = useState(0);
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? "🔥" : null}
        </li>
        <li>
          <Link href="/about-us">About Us</Link>{" "}
          {path === "/about-us" ? "🔥" : null}
        </li>
        <li>
          <button onClick={() => setCount((current) => current + 1)}>
            {count}
          </button>
        </li>
      </ul>
    </nav>
  );
}

// hydration 프로세스(단순 HTML을 React application으로 초기화하는 작업)
// about-us --------> Boring HTML --------> :) --------> init(Boring HTML)
