"use client";import {useSiteActions} from '../SiteShell';import About from '../About';export default function AboutView(){const a=useSiteActions();return <About onBookDemoClick={a.openBookDemo}/>}
