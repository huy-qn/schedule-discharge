import {
  Box,
  Flex,
  Text,
  Select,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Icon,
  RadioGroup,
  Stack,
  Radio,
  useOutsideClick,
} from "@chakra-ui/react";
import { useState, useRef } from "react";
import { BiSearch, BiX } from "react-icons/bi";
import { BsFillCaretDownFill } from "react-icons/bs";
import { FaLeaf } from "react-icons/fa";
import { MdRefresh } from "react-icons/md";
import { Logo } from "../components/Logo";

const TIME_FRAMES = [
  "12 AM",
  "1 AM",
  "2 AM",
  "3 AM",
  "4 AM",
  "5 AM",
  "6 AM",
  "7 AM",
  "8 AM",
  "9 AM",
  "10 AM",
  "11 AM",
  "12 PM",
  "1 PM",
  "2 PM",
  "3 PM",
  "4 PM",
  "5 PM",
  "6 PM",
  "7 PM",
  "8 PM",
  "9 PM",
  "10 PM",
  "11 PM",
];

const FAKE_CHARGE = [
  100, 60, 0, 0, 0, 0, 0, 30, 50, 10, 30, 10, 100, 60, 0, 0, 0, 0, 0, 30, 50,
  10, 30, 10,
];

const EVESE = [
  "Agricultural-Gray-Jewish-4",
  "Molecular-Freddy-Canadian-8",
  "Individual-Ardyce-Chinese-9",
  "Afraid-Carley-British-3",
];

const SelectEVSE = () => {
  const eveseSearchBoxRef = useRef(null);
  const [searchBox, setSearchBox] = useState(false);
  useOutsideClick({
    ref: eveseSearchBoxRef,
    handler: () => setSearchBox(false),
  });

  return (
    <Box position="relative">
      <Flex
        alignItems="center"
        _hover={{
          cursor: "pointer",
        }}
        onClick={() => {
          setSearchBox(!searchBox);
        }}
      >
        <Text fontSize="2xl" fontWeight="600" p="4">
          Agricultural-Gray-Jewish-4
        </Text>
        <Flex alignItems="center">
          <Icon as={BsFillCaretDownFill} w="4" h="4" />
        </Flex>
      </Flex>
      <Box
        ref={eveseSearchBoxRef}
        position="absolute"
        top="64px"
        left="0"
        border="solid 1px"
        borderRadius="md"
        borderColor="gray.100"
        boxShadow="md"
        p="4"
        backgroundColor="white"
        width="md"
        zIndex="2"
        display={searchBox ? "block" : "none"}
      >
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
          >
            <Icon as={BiSearch} />
          </InputLeftElement>
          <Input placeholder="Search EVSE" />
          <InputRightElement>
            <Icon as={BiX} color="gray.500" />
          </InputRightElement>
        </InputGroup>
        <Box p="4">
          <RadioGroup defaultValue="1">
            <Stack>
              <Radio value="1">Agricultural-Gray-Jewish-4</Radio>
              <Radio value="2">Molecular-Freddy-Canadian-8</Radio>
              <Radio value="3">Afraid-Carley-British-3</Radio>
            </Stack>
          </RadioGroup>
        </Box>
      </Box>
    </Box>
  );
};

// const ChargeItem = ({ name, time, chargeAmount, startAt }) => {
//   return (
//     <Box my="4">
//       <Flex>
//         <Box width={`${startAt / 24 * 100}%`} borderRadius="lg" mr="0"></Box>
//         <Flex
//           width={time / 24}
//           bgColor="red.100"
//           borderRadius="lg"
//           textAlign="center"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <Text fontWeight="900" fontSize="xs" color="red.900">
//             200 kW
//           </Text>
//         </Flex>
//       </Flex>
//     </Box>
//   );
// };

const DischargeItem = ({ chargeAmount, number }) => {
  return (
    <Box>
      <Flex
        width="54px"
        position="relative"
        justifyContent="center"
        alignItems="center"
      >
        <Flex
          width="100%"
          height="24px"
          bgColor={chargeAmount === 0 ? "white" : "blue.100"}
          position="absolute"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box width="1px" height="48px" bgColor="white" position="relative">
            <Text
              position="absolute"
              top="-32px"
              left="-8px"
              fontSize="10px"
              textAlign="center"
            >
              {number > 12 ? `${number} PM` : `${number} AM`}
            </Text>
          </Box>
          <Text
            position="absolute"
            zIndex="1"
            fontWeight="400"
            color={chargeAmount === 0 ? "white" : "blue.900"}
            fontSize="12px"
            textAlign="center"
            width="100%"
          >
            <strong>{chargeAmount} kW</strong>
          </Text>
          {/* <Box
            width={number === 23 ? '1px' : '0px'}
            height="48px"
            bgColor="gray.600"
          >
          </Box> */}
        </Flex>
      </Flex>
    </Box>
  );
};

const TimeScale = () => {
  return (
    <Flex justifyContent="space-between">
      <Box width="72px"></Box>
      {TIME_FRAMES.map((time) => (
        <Flex
          key={time}
          bgColor="gray.50"
          borderRadius="lg"
          textAlign="center"
          alignItems="center"
          justifyContent="center"
          mx="1"
        >
          <Text width="40px" fontWeight="400" fontSize="11px" color="gray.900">
            {time}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default function Home() {
  return (
    <Box maxWidth="9xl" marginX="auto" backgroundColor="white">
      <Flex alignItems="center" py="8" justifyContent="space-between">
        <Box width="200px" mr="4">
          <Logo />
        </Box>
        <Box px="8">
          <Flex
            alignItems="center"
            _hover={{
              cursor: "pointer",
            }}
          >
            <Icon as={MdRefresh} color="blue.600" w="6" h="6" />
            <Text color="blue.600" textDecoration="underline">
              Refresh
            </Text>
          </Flex>
        </Box>
      </Flex>
      <Box p="4">
        <Flex justifyContent="space-between" alignItems="center" my="8">
          <SelectEVSE />
          <Flex width="40%" alignItems="center" justifyContent="flex-end">
            <Box width="80%" p="4">
              <Select placeholder="Select schedule">
                <option value="option1">07/10/2022 — 07/17/2022</option>
                <option value="option2">07/10/2022 — 07/17/2022</option>
                <option value="option3">07/10/2022 — 07/17/2022</option>
              </Select>
            </Box>
          </Flex>
        </Flex>
        <Flex pt="16" pb="8" borderTop="solid 1px" borderColor="gray.100">
          {/* <ChargeItem name={EVESE[0]} time={8} startAt={8}/> */}
          <Flex alignItems="center" justifyContent="space-between" mx="auto">
            <Box width="144px" textAlign="center">
              <Icon as={FaLeaf} color="green.600" />
              <Text textAlign="center" fontWeight="900" fontSize="xs">
                WEDNESDAY
              </Text>
              <Text
                fontWeight="400"
                color="green.700"
                fontSize="10px"
                textAlign="center"
              >
                <strong>6000 kw</strong>
                <br />
                requested
              </Text>
            </Box>
            {FAKE_CHARGE.map((charge, index) => (
              <DischargeItem key={index} chargeAmount={charge} number={index} />
            ))}
          </Flex>
        </Flex>
        <Flex pt="16" pb="8" borderTop="solid 1px" borderColor="gray.100">
          {/* <ChargeItem name={EVESE[0]} time={8} startAt={8}/> */}
          <Flex alignItems="center" justifyContent="space-between" mx="auto">
            <Box width="144px" textAlign="center">
              <Icon as={FaLeaf} color="green.600" />
              <Text textAlign="center" fontWeight="900" fontSize="xs">
                THURSDAY
              </Text>
              <Text
                fontWeight="400"
                color="green.700"
                fontSize="10px"
                textAlign="center"
              >
                <strong>3000 kw</strong>
                <br />
                requested
              </Text>
            </Box>
            {FAKE_CHARGE.map((charge, index) => (
              <DischargeItem key={index} chargeAmount={charge} number={index} />
            ))}
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
