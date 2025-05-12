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

// server side render는 모든 component에 발생한다. 모든 component들이 server side에서 먼저 render된다
// client에서 interactive하게 만들어질 components는 오직 use client 지시어를 맨 위에 갖고 있는 component들 뿐이다
// use client는 framework에 이런 식으로 말을 한다. "이봐, 이 component는 client에서 interactive(hydrate) 해야 해 "
// 결국 use client는 backend에서 render되고, frontend에서 hydrate 및 interactive 됨을 의미한다.
// use client를 선언하지 않으면 기본적으로 모두 server component가 되는것이다
