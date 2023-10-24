import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import btcSrc from "../assets/sec.jpg";
// import btcSrc from "../assets/btc.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={"rgb(0,0,0)"} w={"full"} h={"80vh"}>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateX: "60px",
          translateY: "60px",
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={"500px"}
          objectFit={"contain"}
          src={btcSrc}
          filter={"grayscale(1)"}
          pt={"5"}
        />
      </motion.div>

      <Text
        fontSize={"8xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
        mt={"-40"}
      >
        CryptoBoost
      </Text>
    </Box>
  );
};

export default Home;