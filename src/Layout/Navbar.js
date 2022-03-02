import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Input,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { Link as lee } from 'react-router-dom'
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import {Navigate} from "react-router"
const Links = ['Home ', 'Following', 'Answer','Spaces','Notifications'];
const route=['following','answer','spaces','notifications']
const handleQuestion=()=>{
   console.log("Clicked")
 }
const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);


export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('blue.400', 'blue.500')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box
            src={
              'https://cdn.vox-cdn.com/thumbor/5SlrEutlJopfTnHbz9xGvrvdqR4=/7x0:633x417/920x613/filters:focal(7x0:633x417):format(webp)/cdn.vox-cdn.com/assets/1296846/quoralogo.jpg'
            }></Box>
            <HStack
              as={lee} 
              to={'/answer'}
              spacing={10}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Input w={500} placeholder='Search...' size='md' />
          <Flex alignItems={'center'}>
            <Button
              variant={'solid'}
              colorScheme={'orange'}
              size={'sm'}
              mr={4}
              leftIcon={<AddIcon />}
              onClick={handleQuestion}>
              Add Question
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  
                />
              </MenuButton>
              <MenuList>
              <MenuItem as={lee} to={'/stats'}>Your Content & stats</MenuItem>
              <MenuItem as={lee} to={'/bookmarks'}>Bookmarks</MenuItem>
              <MenuDivider />
              <MenuItem as={lee} to={'/settings'}>Settings</MenuItem>
                
              <MenuItem>Dark Mode </MenuItem>
                
              <MenuItem as={lee} to={'/landingpage'}>Log out</MenuItem>
                
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      
    </>
  );
}