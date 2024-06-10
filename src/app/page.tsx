// app/page.tsx
"use client";

import React from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { SearchIcon } from "@nextui-org/shared-icons";
import { Button } from "@nextui-org/button";
import { Slider } from "@nextui-org/slider";
import { Divider, Link, Image } from "@nextui-org/react";
import { VolumeHighIcon } from '../../Icons/VolumeHighIcon';
import { VolumeLowIcon } from "../../Icons/VolumeLowIcon";
import { Play, SkipForward, SkipBack } from 'lucide-react';
import { SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { SignedIn } from "@clerk/clerk-react";

export default function App() {
  return (
      <div className="flex w-full flex-col">
        <header style={{ display: 'flex', justifyContent: 'space-between', padding: 20 }}>
          <h1>Plapy</h1>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </header>

        <Tabs aria-label="Options">
          <Tab key="home" title="Home">
            <Card>
              <CardBody>
                <div>
                  <Card className="max-w-[400px]">
                    <CardHeader className="flex gap-3">
                      <Image
                          alt="Song logo"
                          height={40}
                          radius="sm"
                          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                          width={40}
                      />
                      <div className="flex flex-col">
                        <p className="text-md">Songtitle</p>
                        <p className="text-small text-default-500">Artist</p>
                      </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                      <p>Songtitle of next Song</p>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                      <Link isExternal showAnchorIcon href="https://github.com/nextui-org/nextui">
                        Youtube URL
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                  <Button color="primary">
                    <SkipBack />
                  </Button>
                  <Button color="primary">
                    <Play />
                  </Button>
                  <Button color="primary">
                    <SkipForward />
                  </Button>
                </div>
                <div>
                  <Slider
                      aria-label="Volume"
                      size="lg"
                      color="success"
                      startContent={<VolumeLowIcon className="text-2xl" />}
                      endContent={<VolumeHighIcon className="text-2xl" />}
                      className="max-w-md"
                      defaultValue={40}
                  />
                </div>
                <Button color="primary">
                  Radio
                </Button>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="songs" title="Songs">
            <Card>
              <CardBody>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                  <Input type="playsong" label="Play Song" placeholder="Enter URL or Songname" />
                </div>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                  <Button color="primary">
                    Play
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="playlists" title="Playlists">
            <Card>
              <CardBody>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                  <Input type="playPlaylist" label="Play Playlist" placeholder="Enter URL" />
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
          </Tab>
        </Tabs>
      </div>
  );
}
