import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Link as ChakraLink } from "@chakra-ui/react";

const Header: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  let left = (
    <Box>
      <Link href="/" passHref>
        <ChakraLink _hover={{ color: "gray.400" }}>Feed</ChakraLink>
      </Link>
    </Box>
  );

  let right = null;

  return (
    <nav>
      {left}
      {right}
    </nav>
  );
};

export default Header;
