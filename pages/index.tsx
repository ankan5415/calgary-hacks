import React from "react";
import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import Post, { PostProps } from "../components/Post";
import prisma from "../lib/prisma";
import { Box, Heading } from "@chakra-ui/react";

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return { props: { feed } };
};

type Props = {
  feed: PostProps[];
};

const Blog: React.FC<Props> = (props) => {
  return (
    <Layout>
      <Box mt={2}>
        <Heading>Public Feed</Heading>
        <main>
          {props.feed.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </main>
      </Box>
    </Layout>
  );
};

export default Blog;
