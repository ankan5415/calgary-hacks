import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";
import { Box, Heading, Text } from "@chakra-ui/react";

export type PostProps = {
  id: number;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  published: boolean;
};

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  const authorName = post.author ? post.author.name : "Unknown author";
  return (
    <Box
      onClick={() => Router.push("/p/[id]", `/p/${post.id}`)}
      my="5"
      p="3"
      borderColor={"gray.500"}
      border="1px"
      borderRadius={"md"}
    >
      <Heading as="h2" size={"md"}>
        {post.title}
      </Heading>
      <Text fontSize={"xs"}>By {authorName}</Text>
      <ReactMarkdown children={post.content} />
    </Box>
  );
};

export default Post;
