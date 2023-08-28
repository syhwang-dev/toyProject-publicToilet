import React from 'react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import "./styles/cursor.css" // 커서 컴포넌트의 스타일을 정의한 CSS 파일

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      // backgroundColor: "yellow"
    },
    // text: {
    //   height: 150,
    //   width: 150,
    //   x: mousePosition.x - 75,
    //   y: mousePosition.y - 75,
    //   backgroundColor: "yellow",
    //   mixBlendMode: "difference"
    // }
  }

  // const textEnter = () =>  setCursorVariant("text");
  // const textLeave = () =>  setCursorVariant("default");

  return (
        <motion.div
        className='cursor'
        variants={variants}
        animate={cursorVariant}
        >

        </motion.div>
  )
};

export default Cursor;