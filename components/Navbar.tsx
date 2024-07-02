import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./button"

import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/"></Link>
        </li>
        <li>
          <Link href="/features"></Link>
        </li>
        {/* ...more navigation items */}
      </ul>
    </nav>
  );
};

export default Navbar;