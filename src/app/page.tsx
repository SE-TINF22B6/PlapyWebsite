"use client";

import React, {useEffect, useState} from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import {EyeFilledIcon, EyeSlashFilledIcon, SearchIcon} from "@nextui-org/shared-icons";
import { Button } from "@nextui-org/button";
import { Slider } from "@nextui-org/slider";
import { Divider, Link, Image } from "@nextui-org/react";
import { VolumeHighIcon } from '../../Icons/VolumeHighIcon';
import { VolumeLowIcon } from "../../Icons/VolumeLowIcon";
import {Play, SkipForward, SkipBack, SettingsIcon} from 'lucide-react';
import { SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { SignedIn } from "@clerk/clerk-react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/modal";
import {useTheme} from 'next-themes';
import theme from "tailwindcss/defaultTheme";
import ReactDOM from "react-dom/client";
import {NextUIProvider} from "@nextui-org/react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import localFont from "next/dist/compiled/@next/font/dist/local";
import NextImage from "next/image";
import PlapyTitle from '../../Icons/Title.png'


export default function App()
{
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);


  return (
      <div className="dark text-foreground bg-background">
        <header style={{display: 'flex', justifyContent: 'space-between', padding: 20}}>
          <h1 className="text-4xl font-serif">
            Plapy
          </h1>
            <Button onPress={onOpen}>
              <SettingsIcon/>
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
              <ModalContent style={{display: 'flex', justifyContent: 'space-between', padding: 20}}>
                {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                      <ModalBody>
                        <Input type="email" placeholder="Enter the API URL"/>
                        <Input type="email" placeholder="Enter your UserID"/>
                        <Input type="email" placeholder="Enter the channelID of the music commands channel"/>
                        <Input type="email" placeholder="Enter the guildID of your server"/>
                        <Input
                            variant="bordered"
                            placeholder="Enter API Key"
                            endContent={
                              <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                {isVisible ? (
                                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none"/>
                                ) : (
                                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none"/>
                                )}
                              </button>
                            }
                            type={isVisible ? "text" : "password"}
                            className="max-w-xs"
                        />
                      </ModalBody>
                      <ModalFooter>
                        <Button color="danger" variant="light" onPress={onClose}>
                          Close
                        </Button>
                        <Button color="primary" onPress={onClose}>
                          Action
                        </Button>
                      </ModalFooter>
                    </>
                )}
              </ModalContent>
            </Modal>

            <SignedIn>
              <UserButton/>
            </SignedIn>
            <SignedOut>
              <SignInButton/>
            </SignedOut>
        </header>

        <Tabs aria-label="Options" color={"primary"} className="flex flex-col contain-size">

          <Tab key="home" title="Home" className="contain-size" >
            <Card className="contain-size" style={{ width: '99vw', height: '83vh' }}>
              <CardBody className="contain-size">
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', gap: 200 }}>

                  <div className="flex flex-col flex-grow" style={{ gap: '60px' }}>
                    <div className="justify-center">
                      <Card className="mb-4"  style={{height:'250px', marginTop:'30px'}}>
                        <CardHeader className="flex items-center gap-3">
                          <Image
                              alt="Song logo"
                              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                              width={40}
                              height={40}
                              radius="sm"
                          />
                          <div className="flex flex-col">
                            <p className="text-md">Song Title</p>
                            <p className="text-small text-default-500">Artist</p>
                          </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                          <p>Next Song Title</p>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                          <Link isExternal showAnchorIcon href="https://github.com/nextui-org/nextui">
                            Song URL
                          </Link>
                        </CardFooter>
                      </Card>
                    </div>


                    <div className="flex w-full flex-wrap md:flex-nowrap gap-2 items-center justify-center">
                      <Button color="primary" style={{width:'30%'}}>
                        <SkipBack />
                      </Button>
                      <Button color="primary" style={{width:'30%'}}>
                        <Play />
                      </Button>
                      <Button color="primary" style={{width:'30%'}}>
                        <SkipForward />
                      </Button>
                    </div>

                    <div className="mt-4">
                      <Slider
                          aria-label="Volume"
                          size="lg"
                          color="success"
                          startContent={<VolumeLowIcon className="text-2xl" />}
                          endContent={<VolumeHighIcon className="text-2xl" />}
                          className="max-w"
                          defaultValue={50}
                          radius="full"
                      />
                    </div>

                    <div className="flex w-full flex-wrap md:flex-nowrap gap-2 items-center justify-center" style={{marginTop:'50px'}}>
                      <Button color="primary" className="mt-4" style={{width:'200px', height:'80px'}}>
                        Radio
                      </Button>
                    </div>

                  </div>

                  <div className="flex flex-col flex-grow" style={{ gap: '20px' }}>
                    <h1 className="mb-4">Queue</h1>
                    <Table removeWrapper aria-label="Example static collection table">
                      <TableHeader>
                        <TableColumn>Title</TableColumn>
                        <TableColumn>Artist</TableColumn>
                        <TableColumn>Album</TableColumn>
                        <TableColumn>URL</TableColumn>
                      </TableHeader>
                      <TableBody>
                        <TableRow key="1">
                          <TableCell>Title 1</TableCell>
                          <TableCell>Artist 1</TableCell>
                          <TableCell>Album 1</TableCell>
                          <TableCell>URL</TableCell>
                        </TableRow>
                        <TableRow key="2">
                          <TableCell>Title 2</TableCell>
                          <TableCell>Artist 2</TableCell>
                          <TableCell>Album 2</TableCell>
                          <TableCell>URL</TableCell>
                        </TableRow>
                        <TableRow key="3">
                          <TableCell>Title 3</TableCell>
                          <TableCell>Artist 3</TableCell>
                          <TableCell>Album 3</TableCell>
                          <TableCell>URL</TableCell>
                        </TableRow>
                        <TableRow key="4">
                          <TableCell>Title 4</TableCell>
                          <TableCell>Artist 4</TableCell>
                          <TableCell>Album 4</TableCell>
                          <TableCell>URL</TableCell>
                        </TableRow>
                        <TableRow key="5">
                          <TableCell>Title 5</TableCell>
                          <TableCell>Artist 5</TableCell>
                          <TableCell>Album 5</TableCell>
                          <TableCell>URL</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Tab>


          <Tab key="songs" title="Songs">
            <Card className="contain-size" style={{ width: '99vw', height: '83vh' }}>
            <CardBody>
              <div style={{width:'800px'}}>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                  <Input type="playsong" label="Play Song" placeholder="Enter URL or Songname"/>
                </div>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                  <Button color="primary">
                    Play
                  </Button>
                </div>
              </div>

              <div style={{width:'800px'}}>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                  <Input type="addsong" label="Add Song to queue" placeholder="Enter URL or Songname"/>
                </div>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                  <Button color="primary">
                    Add
                  </Button>
                </div>
              </div>
            </CardBody>
            </Card>

          </Tab>
          <Tab key="playlists" title="Playlists">
            <Card>
              <CardBody>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                  <Input type="playPlaylist" label="Play Playlist" placeholder="Enter URL"/>
                </div>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                  <Button color="primary">
                    Play
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="search" title="Search">
            <Card>
              <CardBody>
                <div className="w-[340px] h-[240px] px-8 rounded-2xl flex justify-center items-center bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                  <Input
                      isClearable
                      radius="lg"
                      classNames={{
                        label: "text-black/50 dark:text-white/90",
                        input: [
                          "bg-transparent",
                          "text-black/90 dark:text-white/90",
                          "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                        ],
                        innerWrapper: "bg-transparent",
                        inputWrapper: [
                          "shadow-xl",
                          "bg-default-200/50",
                          "dark:bg-default/60",
                          "backdrop-blur-xl",
                          "backdrop-saturate-200",
                          "hover:bg-default-200/70",
                          "dark:hover:bg-default/70",
                          "group-data-[focus=true]:bg-default-200/50",
                          "dark:group-data-[focus=true]:bg-default/60",
                          "!cursor-text",
                        ],
                      }}
                      startContent={
                        <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                      }
                  />
                </div>
              </CardBody>
            </Card>

            <Table removeWrapper aria-label="Example static collection table">
              <TableHeader>
                <TableColumn>Title</TableColumn>
                <TableColumn>Artist</TableColumn>
                <TableColumn>Album</TableColumn>
                <TableColumn>URL</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>Tony Reichert</TableCell>
                  <TableCell>CEO</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>Zoey Lang</TableCell>
                  <TableCell>Technical Lead</TableCell>
                  <TableCell>Paused</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell>Jane Fisher</TableCell>
                  <TableCell>Senior Developer</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell>William Howard</TableCell>
                  <TableCell>Community Manager</TableCell>
                  <TableCell>Vacation</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Tab>
        </Tabs>
      </div>
  );
}

