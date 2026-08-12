---
title: 'Mapping the Public Safety Software Market: 13 Vendors, One Category Nobody Outside It Understands'
description: 'CAD, 911, RMS, jail management, EMS charting — public safety software is really six markets wearing one trench coat. A vendor-by-vendor breakdown of who actually competes with whom, and where Tyler Technologies stands in CAD, 911, and jail.'
pubDate: 'Aug 12 2026'
heroImage: '../../assets/public-safety-software-market.png'
---

Public safety software isn't one market. It's six markets — CAD, 911 call-handling, records management, jail management, EMS charting, fire operations — that got lumped together under one "govtech" umbrella because they all show up on the same RFP.<sup><a href="#ref-1">[1]</a></sup>

I spent years inside this category at Tyler Technologies, watching a 911 call turn into a dispatch ticket, a police report, and eventually a booking record.<sup><a href="#ref-2">[2]</a></sup> So I went and mapped the field — not the marketing copy, the actual vendors, their real customers, and their real (or best-estimated) revenue.

Here's what the market actually looks like.

## The Vendor Landscape

| Company | Founded | Ownership / Revenue | Lighthouse Implementation | Core Products | One-liner |
|---|---|---|---|---|---|
| **Tyler Technologies** | 1966 | Public (NYSE: TYL); ~$2.3B total FY2025 revenue<sup><a href="#ref-3">[3]</a></sup> | Macomb County, MI — multi-jurisdiction CAD/Records/Mobile rollout<sup><a href="#ref-4">[4]</a></sup> | New World Enterprise CAD, RMS, Mobile, Jail/Corrections | Largest pure-play US public-sector software company, building a full CAD-RMS-Jail stack |
| **Motorola Solutions** | 1928 (spun off standalone in 2011) | Public (NYSE: MSI); $11.68B FY2025 revenue<sup><a href="#ref-5">[5]</a></sup> | City of Oakland, CA — PremierOne CAD modernization<sup><a href="#ref-6">[6]</a></sup> | PremierOne CAD, CommandCentral, Assist AI, radios, body cameras | Radio/hardware giant turned software platform; ~60% of US PSAPs already run its 911 command software<sup><a href="#ref-5">[5]</a></sup> |
| **CentralSquare Technologies** | 2018 (merger of Superion, TriTech, Zuercher, Aptean) | PE-owned (Bain Capital, Vista Equity)<sup><a href="#ref-7">[7]</a></sup> | Burke County, NC — ONESolution CAD/RMS/Jail/Mobile integration<sup><a href="#ref-8">[8]</a></sup> | CAD, RMS, Jail, Mobile, Vertex NG911 | Largest independent PS/justice portfolio — Tyler's closest full-stack rival |
| **Mark43** | 2012 | Private/VC; $257M raised total, incl. $101M Series E<sup><a href="#ref-9">[9]</a></sup> | Atlanta PD — migrated 2,000+ users off legacy systems in 7 months, mid-COVID<sup><a href="#ref-10">[10]</a></sup> | CAD, RMS, OnScene mobile, Insights analytics | Cloud-native CAD/RMS challenger winning major-metro RFPs on modern UX |
| **Versaterm** | 1977 (Ottawa) | PE-owned (Banneker Partners); $100M+ USD revenue, profitable<sup><a href="#ref-11">[11]</a></sup> | CA expansion (Grover Beach, El Cajon, Tustin PD)<sup><a href="#ref-12">[12]</a></sup>; acquired DroneSense for $100M+<sup><a href="#ref-13">[13]</a></sup> | CAD, RMS, forensics, community engagement | 45-year-old Canadian CAD/RMS incumbent pushing hard into the US via M&A |
| **First Due** | 2016 | Private; $355M strategic investment, Aug 2025<sup><a href="#ref-14">[14]</a></sup> | State of Michigan DHHS — statewide ePCR vendor<sup><a href="#ref-15">[15]</a></sup> | Unified fire/EMS/law-enforcement ops platform | Best-funded pure-play challenger in fire/EMS operations software |
| **ESO** | 2004 (Austin) | Private; $248.5M revenue (2024)<sup><a href="#ref-16">[16]</a></sup> | Austin Fire Dept — NERIS fire-reporting rollout<sup><a href="#ref-17">[17]</a></sup> | ESO EHR, Fire RMS, Health Data Exchange, NERIS | Largest pure-play EMS/fire data company, now pushing into Fire RMS territory |
| **ImageTrend** | 1998 (Eagan, MN) | Private; $25.2M revenue (2024)<sup><a href="#ref-18">[18]</a></sup> | Mississippi State Dept. of Health — statewide trauma registry<sup><a href="#ref-19">[19]</a></sup> | EMS/Fire/Hospital reporting, Patient Registry | Runs 43 of the nation's state EMS data repositories |
| **Zoll Data Systems** | 1993 (as Pinpoint Technologies)<sup><a href="#ref-20">[20]</a></sup> | Owned by Asahi Kasei (Japan) via Zoll Medical, $2.2B deal in 2012<sup><a href="#ref-21">[21]</a></sup> | None current — flagship RescueNet suite is end-of-life<sup><a href="#ref-20">[20]</a></sup> | RescueNet Dispatch, ePCR, Billing | Legacy EMS CAD/ePCR suite, now sunsetting inside a Japanese conglomerate |
| **Blueforce Development** | 2005 (Newburyport, MA) | Private; revenue undisclosed<sup><a href="#ref-22">[22]</a></sup> | Unnamed state police agency — tactical "digital throw phone" deployment<sup><a href="#ref-23">[23]</a></sup> | BlueforceCOMMAND, BlueforceTACTICAL | Defense-lineage situational-awareness tool, not a mainstream CAD/RMS play |
| **CSI Technology Group** | 1990 (Keasbey, NJ) | Private; ~73 employees, revenue undisclosed<sup><a href="#ref-24">[24]</a></sup> | City of Rochester, NH — new CAD/RMS for police and fire<sup><a href="#ref-25">[25]</a></sup> | CAD, RMS, mobile, court e-filing | Small regional eGovernment vendor, not a scale threat |
| **PublicEngines** | 2007 (Salt Lake City) | Acquired by Motorola in 2015 — no longer independent<sup><a href="#ref-26">[26]</a></sup> | N/A — folded into Motorola's CommandCentral | CrimeReports (crime mapping, predictive policing) | Cloud crime-analytics pioneer, now a footnote inside Motorola's stack |

Most of these companies are private, so exact revenue is often unknowable — where I only found funding raised or a broad estimate, that's what's in the table. Take anything without a hard number for the estimate it is.

## Where the Fights Actually Are

**CAD.** This is a three-way fight between Tyler, Motorola, and CentralSquare, with Versaterm and Mark43 circling. Motorola's edge isn't the software — it's the radio and 911 infrastructure already sitting in the building before a CAD conversation even starts. CentralSquare is the closest apples-to-apples competitor, bundling CAD-RMS-Jail the same way Tyler does, though it's still digesting a four-company merger from 2018. Mark43 isn't winning on volume, but it's winning the specific fight that matters most: large-metro agencies who want a modern cloud UI instead of an on-prem legacy screen. That's the RFP Tyler has to defend hardest, not the small-agency deals.

**911.** Not really a fair fight. Roughly 60% of the country's 6,000 PSAPs already run Motorola's command-center software — a structural advantage built on decades of radio contracts, not code.<sup><a href="#ref-5">[5]</a></sup> Everyone else, Tyler included, is selling 911 as a feature bundled with CAD rather than a standalone category the way Motorola can.

**Jail.** This is the one place Tyler has real breathing room. CentralSquare is the only other vendor on this list with a native jail/corrections module. Mark43, Versaterm, and CSI stop at CAD/RMS. First Due, PSTrax, ImageTrend, ESO, and Zoll never show up here at all — they're fire and EMS shops, not law enforcement or corrections. Jail management is a two-horse race, and that's rare in this market.

**The adjacent lane.** ESO, ImageTrend, Zoll, and PSTrax mostly aren't fighting Tyler for anything — they live in fire/EMS data and station operations. Worth knowing they exist, not worth treating as competitive threats in CAD, 911, or jail.

## The Takeaway

The public safety software market looks consolidated from the outside — a handful of familiar logos on every county RFP. Look closer and it's actually two different games running in parallel: a scale war in CAD/911/RMS between Tyler, Motorola, and CentralSquare (with PE money funding Versaterm's attempt to break in), and a much more fragmented, VC-fueled fight in fire/EMS between First Due, ESO, and ImageTrend that barely touches the first game at all.

Jail management is the outlier — the one lane where the field narrows to two, and where the winner isn't determined by who has the flashiest UI, but by who already has the CAD and RMS contract to build it on top of.

---

## Works Cited

1. <span id="ref-1">[Public Safety Software: 2025 CAD RMS Pricing & Vendor Guide — Civic IQ](https://civiciq.com/blog/2026-public-safety-software-cad-rms-pricing-vendor-guide)</span>
2. <span id="ref-2">[Tyler Technologies — Public Safety Solutions](https://www.tylertech.com/solutions/courts-public-safety)</span>
3. <span id="ref-3">[Tyler Technologies FY2025 Revenue Guidance — Yahoo Finance](https://finance.yahoo.com/markets/stocks/articles/record-recurring-revenue-public-safety-211209308.html)</span>
4. <span id="ref-4">[Macomb County Government Case Study — Tyler Technologies](https://www.casestudies.com/company/tyler-technologies/case-study/macomb-county-customer-case-study)</span>
5. <span id="ref-5">[Motorola Solutions Government Contracts: CAD, Body Cameras & Public Safety Analysis — Civic IQ](https://civiciq.com/blog/motorola-solutions-government-contracts-cad-body-cameras-public-safety-analysis-2026)</span>
6. <span id="ref-6">[City of Oakland Strengthens Police, Fire and EMS Dispatch — Police1](https://www.police1.com/police-products/police-technology/software/cad/city-of-oakland-strengthens-police-fire-and-ems-dispatch-with-motorola-solutions)</span>
7. <span id="ref-7">[CentralSquare Technologies — Officer.com](https://www.officer.com/command-hq/technology/computers-software/company/21024576/centralsquare-technologies)</span>
8. <span id="ref-8">[Best of 2024 Content: Public Safety — CentralSquare](https://www.centralsquare.com/resources/articles/best-of-2024-content-public-safety)</span>
9. <span id="ref-9">[Mark43 Announces $101M in Series E Funding — Mark43](https://mark43.com/press/mark43-announces-101m-in-series-e-funding-led-by-the-spruce-house-partnership-and-tiger-global-management/)</span>
10. <span id="ref-10">[Mark43 Launches Cloud-Based RMS for Atlanta Police Department — Mark43](https://mark43.com/press/mark43-launches-innovative-cloud-based-records-management-system-for-atlanta-police-department/)</span>
11. <span id="ref-11">[Versaterm — Wikipedia](https://en.wikipedia.org/wiki/Versaterm)</span>
12. <span id="ref-12">[Versaterm Empowers Agencies Across California — Police1](https://www.police1.com/police-products/police-technology/software/cad/versaterm-empowers-agencies-across-california-in-enhancing-community-engagement-and-trust)</span>
13. <span id="ref-13">[Versaterm Acquires DroneSense for $100M+ — BetaKit](https://betakit.com/public-safety-tech-platform-versaterm-acquires-texas-firm-dronesense-for-more-than-100-million-usd/)</span>
14. <span id="ref-14">[First Due Secures $355M Strategic Investment — Businesswire](https://www.businesswire.com/news/home/20250805965636/en/First-Due-Secures-$355-Million-Strategic-Investment-to-Accelerate-Innovation-in-Public-Safety-Software)</span>
15. <span id="ref-15">[Michigan Selects First Due as Statewide ePCR Vendor — First Due](https://www.firstdue.com/news/first-due-statewide-ems-vendor)</span>
16. <span id="ref-16">[How ESO Hit $248.5M Revenue — Latka](https://getlatka.com/companies/eso.com)</span>
17. <span id="ref-17">[ESO Launches NERIS Solution — GlobeNewswire](https://www.globenewswire.com/news-release/2025/11/20/3192311/0/en/ESO-Launches-NERIS-Solution-With-End-to-End-Workflow-Integration-for-Fire-Service.html)</span>
18. <span id="ref-18">[How ImageTrend Hit $25.2M Revenue — Latka](https://getlatka.com/companies/imagetrend)</span>
19. <span id="ref-19">[Mississippi State Department of Health Patient Registry Case Study — ImageTrend](https://www.imagetrend.com/case-studies/mississippi-state-department-of-health-patient-registry/)</span>
20. <span id="ref-20">[Milestones in History — ZOLL Medical](https://www.zoll.com/en-us/about/who-we-are/history)</span>
21. <span id="ref-21">[Asahi Kasei Buys ZOLL for $2.2 Billion — JEMS](https://www.jems.com/ems-operations/asahi-kasei-buys-zoll-for-2-2-billion/)</span>
22. <span id="ref-22">[Blueforce Development Company Profile — Tracxn](https://tracxn.com/d/companies/blueforce-development/__xckeaWDO3lLR3Sig9ioeTTsYMkju349g40Sv1awycnw)</span>
23. <span id="ref-23">[Blueforce Improves Corrections Officer Situational Awareness — Samsung Insights](https://insights.samsung.com/2020/01/30/blueforce-development-improves-corrections-officer-situational-awareness-and-safety/)</span>
24. <span id="ref-24">[CSI Technology Group — Firmographic](https://firmographic.co/independent-software-vendors/csi-technology-group)</span>
25. <span id="ref-25">[City of Rochester, NH Police and Fire Departments Implement New CAD/RMS — CSI Technology Group](https://www.csitech.com/resources/City-of-Rochester-NH-Police-and-Fire-Departments-Implement-New-CADRMS-Software-System/)</span>
26. <span id="ref-26">[Motorola Solutions Advances Smart Public Safety Innovation with PublicEngines Acquisition — Motorola Solutions](https://www.motorolasolutions.com/newsroom/press-releases/motorola-solutions-042015.html)</span>
