---
title: 'The Drone You Never Hear Coming'
description: 'SFPD Skydio drone feeds streamed live to the open internet for six months before anyone noticed. The bigger story is what the leaked footage reveals: nobody being watched ever looks up.'
pubDate: 'Jul 14 2026'
heroImage: '../../assets/sfpd-drone-leak-invisible-surveillance.png'
---

San Francisco's Skydio drones were livestreaming to the open internet for six months. Nobody caught it until two security researchers, Sam Curry and Maik Robert, stumbled on a misconfigured sharing link with no authentication and just... watched. Color feed, thermal feed, dock feed. Officer names and emails. 48 hours of real operations archived before anyone at SFPD knew. WIRED broke it this week.<sup><a href="#ref-1">[1]</a></sup>

I wrote about this Skydio program a couple weeks ago — ["When Seconds Count, a Drone Gets There First."](/blog/drones-as-first-responders) The technology is genuinely exciting: drones beating patrol cars to 911 calls, drones locating people in burning buildings, drones using thermal cameras to find lost hunters. At the end, I said the guardrails need to move as fast as the drones. I did not expect the guardrails to fail this fast.

---

## The Detail That Sticks

Oddly, there is one key detail that's stuck with me since I read the WIRED piece. It's not about poor security practices which clearly need to be cleaned up. It's this: in the leaked footage, nobody being watched ever looks up. Not once. The drone is so high that it's silent to the people below. No rotor whine, no shadow you'd notice, nothing that triggers the human instinct to check the sky. You get watched and you have zero signal that it's happening.

That's scary. Even surveillance camera's are easy to spot on buildings or inside store fronts.  A helicopter announces itself. A patrol car announces itself. A Skydio X10 at altitude does not. We built an invisible watching machine. I doubt many of us feel like we have much privacy anymore with our phones tracking all our movements and Siri listening to our conversations but this is a more physical manifestation. 

---

## The Leak Itself

The exposure came from a misconfigured sharing link inside SFPD's own Skydio software — no authentication code, a one-year expiration date. Curry and Robert found it while poking at Skydio's public web infrastructure, reported it about two days later, and the feed was pulled offline. By then they had watched San Francisco police carry out detentions and track vehicles in real time.<sup><a href="#ref-1">[1]</a></sup><sup><a href="#ref-2">[2]</a></sup>

That is not a sophisticated hack. It's a rounding error nobody checked, sitting on top of infrastructure that runs 24/7 over an entire city.

---

## We Live in Interesting Times

Every govtech write-up about "faster response times" and "resolved without a ground unit" has a flip side in a potential invasion of privacy at best and perhaps a lethal result in the future.  The tech is just a tool which can be used for good or for evil. In this case it was a simple mistake. But I am sure that this won't always be the case. The problem is we're deploying silent, always-on, six-months-unnoticed surveillance infrastructure faster than anyone is building the policy, the auditing, or even the basic security hygiene to go with it.

The technology got ahead of the governance. I said that in the last piece as a warning. Turns out it was already true.

---

## References

<ol>
  <li id="ref-1"><a href="https://www.wired.com/story/sfpd-drone-video-leak-surveillance/">A Leak of San Francisco Police Drone Footage Exposes the New Reality of Urban Surveillance — WIRED, July 2026</a></li>
  <li id="ref-2"><a href="https://dronexl.co/2026/07/13/sfpd-skydio-drone-feed-live-internet/">SFPD Skydio Drone Feeds Streamed Live On The Open Internet For Six Months — DroneXL</a></li>
</ol>
