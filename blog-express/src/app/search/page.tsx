"use client";

import Wrapper from "@/components/wrapper";
import { IBlog } from "@/types/blog";
import { useState } from "react";
import { useDebounce } from "use-debounce";

export default function SearchPage() {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [value, setValue] = useState<string>("");
  const [text] = useDebounce(value, 1000);
  const getData = async () => {
    try {
      const res = await fetch("http:/localhost:8000/api/blogs");
      const result = await res.json();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Wrapper>
      <div></div>
    </Wrapper>
  );
}
