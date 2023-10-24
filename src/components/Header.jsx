import { Button, HStack, Spacer } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HStack p={"9"} shadow={"base"} bgColor={'rgba(176,176,176,0.5)'} spacing={"7"}>
        <Button variant={"unstyled"} color={"blackAlpha.900"} fontSize={"2xl"}>
            <Link to="/">Home</Link>
        </Button>
        <Spacer />
        <Button variant={"unstyled"} color={"blackAlpha.900"} fontSize={"2xl"}>
            <Link to="/exchanges">Exchanges</Link>
        </Button>
        <Button variant={"unstyled"} color={"blackAlpha.900"} fontSize={"2xl"}>
            <Link to="/coins">Coins</Link>
        </Button>
    </HStack>
  )
}

export default Header