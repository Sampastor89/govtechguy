---
title: 'The Lighthouse Play: How Kaizen Labs Is Cracking Open Government Software'
description: 'Kaizen Labs built a beachhead in the one corner of government software that does not require HIPAA, CJIS, or FedRAMP compliance. What they do with that beachhead is the story of how government software actually gets disrupted.'
pubDate: 'Jun 26 2026'
heroImage: '../../assets/kaizen-labs-lighthouse.png'
---

The federal government spent $102.31 billion on IT in fiscal year 2025.<sup><a href="#ref-1">[1]</a></sup> Eighty percent of that — roughly $82 billion — went to operating and maintaining existing systems.<sup><a href="#ref-2">[2]</a></sup> Not building new ones. Maintaining old ones.

Sixty-seven federal agencies run COBOL, a programming language invented in 1959.<sup><a href="#ref-3">[3]</a><a href="#ref-4">[4]</a></sup> The Office of Personnel Management is in the middle of a multi-year project to remove 40-year-old code from its retirement claims system.<sup><a href="#ref-5">[5]</a></sup> Vermont Systems' RecTrac, the dominant parks and recreation management platform used by municipal governments across the country, was built in 1985.<sup><a href="#ref-6">[6]</a></sup>

This is not a software industry. It is a preservation society.

Into this environment, in 2022, walked Nikhil Reddy — an early engineer at Anduril Industries, the defense tech company that doubled revenue to approximately $1 billion in 2024 by treating the Pentagon like a product customer instead of a procurement bureaucracy.<sup><a href="#ref-7">[7]</a></sup> Reddy had a bad experience booking a park in Los Angeles. He looked up what the city was paying for the software. He was stunned by both the price and the quality.

He called KJ Shah, who had spent time in M&A at William Blair covering govtech companies and had seen the same rot from the buy side. They founded Kaizen Labs in New York.

Three years later, Kaizen has raised $35 million from NEA, Andreessen Horowitz, Accel, 776, and Carpenter Capital.<sup><a href="#ref-8">[8]</a></sup> The company is processing transactions for 50+ government agencies across 17 states, serving an estimated 40 million residents.<sup><a href="#ref-8">[8]</a><a href="#ref-9">[9]</a></sup> Annual recurring revenue has grown 9x year-over-year. Their customer base has grown 10x since the start of 2024.<sup><a href="#ref-8">[8]</a></sup>

This did not happen by attacking the whole market. It happened because Reddy and Shah found the door in the wall.

---

## The Compliance Moat — and the Gap in It

Government software is protected by compliance requirements that function as a moat. Not every category, but the important ones — the ones that process criminal records, health information, or federal systems.

**FedRAMP authorization** (required for federal cloud software) costs between $250,000 and $3,000,000+ depending on impact level, takes 6 to 18 months to achieve, and carries $100,000 to $500,000 in annual maintenance costs.<sup><a href="#ref-10">[10]</a></sup> Engineering capacity diverted during the process alone runs an estimated $300,000 to $800,000.<sup><a href="#ref-10">[10]</a></sup> FedRAMP's own "20x" modernization initiative, launched in 2024 to speed up authorization, hasn't materially closed the gap yet.<sup><a href="#ref-11">[11]</a></sup>

**CJIS compliance** (required for any software touching criminal justice records) mandates background checks on all employees with data access, signed security addenda, technical controls, and state-level audits every three years.<sup><a href="#ref-3">[3]</a></sup>

**HIPAA** (required for health data) requires formal business associate agreements, breach notification protocols, and documented technical safeguards.

Parks and recreation software requires none of these. The data involved in park reservations, youth soccer registrations, campsite bookings, and annual passes is not sensitive government data. It is e-commerce data. The barrier to enter the parks and recreation market is SOC 2 Type II — the baseline audit that any credible SaaS company completes.

This is not an accident. Accel partner Amit Kumar confirmed the original investment thesis in writing: "The vision for Kaizen is a modern software platform building first for parks and rec departments with intention to spread horizontally across departments to touch all citizen digital experiences, giving high-volume, rote transactions like obtaining a fishing license or paying a utility bill the e-commerce treatment."<sup><a href="#ref-9">[9]</a></sup>

Start where the wall has no guards. Then build from there.

---

## The Incumbent Landscape: A Fragmented and Aging Field

The parks and recreation software market is estimated at $1.5 billion to $4.5 billion in 2024 (analyst estimates vary by methodology and scope), growing at roughly 8 to 10 percent CAGR.<sup><a href="#ref-12">[12]</a><a href="#ref-13">[13]</a></sup> North America accounts for approximately 38.7 percent of global market share.<sup><a href="#ref-12">[12]</a></sup> The field is fragmented across a dozen meaningful players, none of whom commands dominant market share.

**Vermont Systems / RecTrac** — Founded in 1985 and built originally for one city in Connecticut, RecTrac is the legacy standard for municipal recreation management.<sup><a href="#ref-6">[6]</a></sup> Forty years old. Still in active use across hundreds of municipalities. The platform is functional. It is not beautiful.

**CivicPlus / CivicRec** — CivicPlus was acquired by private equity firm Insight Partners in 2021 for $290 million.<sup><a href="#ref-14">[14]</a></sup> The company processes approximately $1 billion in recreation revenue annually across more than 1,200 parks and recreation departments.<sup><a href="#ref-14">[14]</a></sup> Revenue reached $78.9 million in 2024, up from $46.1 million in 2023 — growth driven primarily by PE-fueled acquisition roll-ups, not organic product investment.<sup><a href="#ref-15">[15]</a></sup>

**Tyler Technologies** — The category's 800-pound gorilla at $2.14 billion in 2024 revenue and an $11.34 billion market cap.<sup><a href="#ref-16">[16]</a></sup> Tyler acquired government payments platform NIC for $2.3 billion in 2021, adding reach across 7,100 federal, state, and local government agencies.<sup><a href="#ref-17">[17]</a></sup> In February 2024, Tyler signed an eight-year agreement with California State Parks — 280 park units, 68 million annual visitors — to power Reserve California, the state's reservation system.<sup><a href="#ref-18">[18]</a></sup> That single deal locks the largest state park system in the country out of Kaizen's addressable market for nearly a decade.

**Daxko / ActiveNet** — Daxko, a private equity-backed fitness and recreation management company, absorbed ActiveNet and rebranded it as Daxko Operations. The product lineage traces back through multiple acquisitions — the classic quality erosion pattern in PE roll-ups.

The pattern across all incumbents is the same: aging platforms, PE ownership optimizing for margin expansion over product quality, and customers who stay because switching costs are prohibitive — not because they love the software. The U.S. Department of Agriculture famously paid $112 million above market rate for one vendor simply to avoid the disruption of switching.<sup><a href="#ref-19">[19]</a></sup> Government software contracts typically run two to five years.<sup><a href="#ref-20">[20]</a></sup> Every contract eventually expires.

---

## The Lighthouse Customers

Kaizen's growth from 2022 to today has not been distributed randomly. It has been concentrated in accounts that maximize reference value — a lighthouse strategy where each major win makes the next conversation shorter.

**Maryland Department of Natural Resources** — The most concrete product proof point in Kaizen's portfolio. Maryland's state parks experienced 166 capacity closures in 2024. Traffic backups were documented on video — a 3.1-mile queue at Greenbrier State Park on July 4, 2024.<sup><a href="#ref-21">[21]</a></sup> Kaizen deployed a new day-pass reservation system across five parks in under 60 days, a month ahead of schedule.<sup><a href="#ref-21">[21]</a></sup> Between Memorial Day Weekend and Labor Day 2025, the system processed more than 67,000 reservations, and capacity closures fell to zero.<sup><a href="#ref-21">[21]</a></sup> A Maryland official stated plainly: *"We went from 166 capacity closures to zero."*<sup><a href="#ref-21">[21]</a></sup> Maryland is now expanding the system to additional parks for 2026.

**Maricopa County, Arizona** — The fourth most populous county in the United States, with 4.6 million residents. Maricopa County Parks & Recreation operates one of the largest regional park systems in the country at approximately 120,000 acres.<sup><a href="#ref-8">[8]</a></sup> Kaizen launched their reservation platform there in November 2025, covering campgrounds, ramadas, sports facilities, programs, and annual passes. Per Kaizen, the win required displacing the largest incumbent in the space.

**San Bernardino County, California** — California's largest county by land area. Announced as a Kaizen customer in October 2025.<sup><a href="#ref-8">[8]</a></sup>

**Suffolk County, New York** — Long Island's largest county, 1.5 million residents.

**Cherokee Nation** — The largest tribal organization in the United States.

Nate Grinzinger, a Director of Parks & Recreation working with Kaizen, gave a quote that ends vendor evaluations: *"If you care about quality and improving the customer experience while decreasing your workload, work with Kaizen."*<sup><a href="#ref-9">[9]</a></sup>

These accounts were not won by accident. They were chosen for size, visibility, and geographic breadth. When a parks director in a mid-sized city evaluates software, Kaizen's reference list now includes agencies serving tens of millions of people across four time zones.

NEA partner Andrew Schoen, who led the Series A, confirmed the investment conviction in public: *"Public services touch hundreds of millions of people every day, yet their technologies often lag far behind the seamless experiences modern consumers expect. Kaizen is bringing thoughtfully designed, AI-native solutions to government services — making them faster, more transparent, and easier to use."*<sup><a href="#ref-22">[22]</a></sup>

---

## The Platform: Airbnb on the Front, Shopify on the Back

Kaizen's architecture is not a parks and recreation product that might someday expand. It is a configurable government payments and services platform that launched in parks and recreation because that was the path of least regulatory resistance.

Accel described the user experience at the seed stage: "It feels like Airbnb — straightforward and pleasant to use — and for administrators, it works like Shopify, making it simple to create offerings and process payments."<sup><a href="#ref-9">[9]</a></sup>

On the back end, administrators use configurable digital building blocks to create service offerings, manage operations, and process payments. On the front end, residents see a branded checkout experience that behaves like consumer e-commerce. The underlying technology — payments processing, account management, reservation logic — is identical regardless of whether it books a campsite, issues a fishing license, schedules a DMV appointment, or pays a utility bill.

Reddy has stated explicitly that the platform serves "a State government in need of a more modern DMV licensing system, or the Federal government's national park reservation system" through the same singular SaaS platform, hyper-configured per use case.<sup><a href="#ref-8">[8]</a></sup>

The founding team brought the talent pipeline of companies that have already cracked government software: Palantir, OpenGov, Granicus, Gusto.<sup><a href="#ref-9">[9]</a></sup> Reddy brought Anduril's product velocity — software-first, rapid iteration — to an industry that measures product cycles in years, not weeks.

CEO Nikhil Reddy on the mission: *"American citizens have been worn down into accepting second-class solutions when it comes to public service technology. Kaizen is building the backbone for public services that reflect the beauty, ambition, and potential of the society they serve."*<sup><a href="#ref-8">[8]</a></sup>

---

## The Expansion Runway

Parks and recreation is Kaizen's beachhead. It is not their destination.

The company has named expansion targets explicitly: DMVs, courts management, utility billing, hunting and fishing licensing, transit, public libraries, and federal agencies.<sup><a href="#ref-8">[8]</a></sup> Team headcount is expanding from 30 to 50 as federal outreach begins.<sup><a href="#ref-8">[8]</a></sup>

The macro environment is cooperating on every front.

President Trump signed an executive order in August 2025 creating the National Design Studio, tasked with overhauling approximately 27,000 federal websites, with Airbnb co-founder Joe Gebbia leading the effort.<sup><a href="#ref-23">[23]</a></sup> Federal agencies have a July 4, 2026 deadline for initial implementation.<sup><a href="#ref-23">[23]</a><a href="#ref-24">[24]</a></sup>

DOGE-related contract cancellations created a vacuum across federal IT, with an estimated $85 billion or more in federal contracts cancelled, reduced, or restructured in 2025.<sup><a href="#ref-25">[25]</a></sup> That disruption does not disappear — it becomes an opening for vendors with modern platforms and fast deployment cycles.

The GovTech market as a whole is projected to grow from $606 billion in 2024 to $1.42 trillion by 2034.<sup><a href="#ref-26">[26]</a></sup> The $102 billion federal IT budget — 80 percent of which currently funds maintenance of legacy systems — is structurally overdue for reallocation.<sup><a href="#ref-1">[1]</a><a href="#ref-2">[2]</a></sup>

---

## What This Means for the Incumbents

Tyler Technologies is not standing still. Their California State Parks deal demonstrates the largest incumbent understood the threat and moved to lock in the most valuable account in the market before the competitive window fully opened. Eight-year contracts are not just revenue — they are competitive exclusion.

But Tyler's $2.14 billion revenue base is also a constraint.<sup><a href="#ref-16">[16]</a></sup> Parks and recreation is a rounding error on their financials. They cannot prioritize it at the level a company whose entire existence depends on it can. Kaizen has 30 engineers focused entirely on government resident services. Tyler's engineering organization is spread across courts, tax, utilities, public safety, and ten other verticals.

CivicPlus's PE ownership creates a different problem. When you are building toward an exit multiple, you do not take risks on expensive product redesigns. You maintain customers and process their revenue. CivicPlus grew revenue 71 percent in one year — not by building a better product, but by acquiring smaller companies.<sup><a href="#ref-15">[15]</a></sup> That is a fundamentally different growth motion than what Kaizen is running.

The real danger for every incumbent is not that Kaizen wins every account immediately. It is that Kaizen builds a reference network of hundreds of agencies across multiple categories over the next five years — and every one of those reference accounts becomes a warm introduction for the next category.

Parks and recreation was not the obvious market. It was the right market. The same government employee who books a campsite for their family on a Friday is the administrator evaluating the next software contract on a Monday. The experience Kaizen builds for the resident and the experience they build for the administrator are the same bet: that good software, experienced at the department level, propagates through government organizations the same way consumer apps propagate through households.

The wall around government software is real. Kaizen found the door.

---

*Kaizen Labs is headquartered in New York City. Total funding: $35 million. Investors: NEA (lead, Series A), Andreessen Horowitz American Dynamism, Accel, 776, Carpenter Capital.*

---

## References

<ol>
  <li id="ref-1"><a href="https://www.statista.com/statistics/605501/united-states-federal-it-budget/">U.S. Federal Government IT Budget 2025 — Statista</a></li>
  <li id="ref-2"><a href="https://intelliworxit.com/blog/government-spending-it/">20 Current Statistics Summarizing U.S. Government IT Spending — Intelliworx</a>; <a href="https://www.gao.gov/products/gao-25-107795">GAO: Agencies Need to Plan for Modernizing Critical Legacy Systems</a></li>
  <li id="ref-3"><a href="https://www.route-fifty.com/emerging-tech/2023/11/government-runs-64-year-old-language-could-ai-help-change/392380/">Government Runs on a 64-Year-Old Language. Could AI Help Change That? — Route Fifty</a></li>
  <li id="ref-4"><a href="https://medium.com/zoominsights/old-coding-language-entrenched-in-100-government-systems-1124e4bb9f36">Old Coding Language Entrenched in 100+ Government Systems — ZoomInfo / Medium</a></li>
  <li id="ref-5"><a href="https://www.squaredcompass.com/blog/the-governments-legacy-it-problem-cobol-floppies-and-the-18-million-ai-fix">The Government's Legacy IT Problem: COBOL, Floppies, and the AI Fix — Squared Compass</a></li>
  <li id="ref-6"><a href="https://vermontsystems.com/rectrac/">Integrated Recreation Management Software — Vermont Systems</a>; <a href="https://www.nrpa.org/parks-recreation-magazine/product-spotlight/vermont-systems-inc/">Vermont Systems Product Spotlight — NRPA</a></li>
  <li id="ref-7"><a href="https://sacra.com/c/anduril/">Anduril Revenue, Valuation & Funding — Sacra</a></li>
  <li id="ref-8"><a href="https://www.globenewswire.com/news-release/2025/10/30/3177523/0/en/Kaizen-raises-21-million-to-re-build-governments-digital-front-door.html">Kaizen Raises $21 Million to Re-Build Government's Digital Front Door — GlobeNewswire</a></li>
  <li id="ref-9"><a href="https://www.accel.com/noteworthies/accel-seed-investment-in-kaizen-improving-technology-for-local-governments">Restoring People's Faith in Local Government: Our Seed Investment in Kaizen — Accel</a></li>
  <li id="ref-10"><a href="https://www.vanta.com/collection/fedramp/fedramp-cost">How Much Does FedRAMP Authorization Cost? — Vanta</a></li>
  <li id="ref-11"><a href="https://www.convox.com/blog/fedramp-authorization-2026-guide-saas-companies">FedRAMP Authorization in 2026: What Software Companies Need to Know — Convox</a></li>
  <li id="ref-12"><a href="https://introspectivemarketresearch.com/press-release/parks-recreation-management-software-market/">Parks & Recreation Management Software Market To Reach USD 8.52 Billion By 2032 — Introspective Market Research</a></li>
  <li id="ref-13"><a href="https://www.theinsightpartners.com/reports/parks-and-recreation-software-market">Parks and Recreation Software Market Size, Share, Scope 2031 — The Insight Partners</a></li>
  <li id="ref-14"><a href="https://www.govtech.com/biz/civicplus-takes-on-private-equity-owners-in-290m-deal">CivicPlus Takes On Private Equity Owners in $290M Deal — GovTech</a></li>
  <li id="ref-15"><a href="https://getlatka.com/companies/civicplus">How CivicPlus Hit $78.9M Revenue and 4K Customers in 2024 — Getlatka</a></li>
  <li id="ref-16"><a href="https://stockanalysis.com/stocks/tyl/revenue/">Tyler Technologies Revenue 2015–2025 — StockAnalysis</a>; <a href="https://companiesmarketcap.com/tyler-technologies/marketcap/">Tyler Technologies Market Cap — CompaniesMarketCap</a></li>
  <li id="ref-17"><a href="https://www.businesswire.com/news/home/20210210005334/en/Tyler-Technologies-to-Acquire-NIC-in-$2.3-Billion-All-Cash-Transaction">Tyler Technologies to Acquire NIC in $2.3 Billion All-Cash Transaction — BusinessWire</a></li>
  <li id="ref-18"><a href="https://www.businesswire.com/news/home/20240213379582/en/Tyler-Technologies-Signs-Eight-Year-Agreement-with-California-State-Parks">Tyler Technologies Signs Eight-Year Agreement with California State Parks — BusinessWire</a></li>
  <li id="ref-19"><a href="https://fedscoop.com/major-government-tech-contractors-use-monopolistic-vendor-lock-to-drive-revenue-study/">Major Government Tech Contractors Use Monopolistic Vendor-Lock to Drive Revenue — FedScoop</a></li>
  <li id="ref-20"><a href="https://www.acquisition.gov/far/subpart-17.1">Subpart 17.1 — Multi-Year Contracting — Acquisition.GOV</a></li>
  <li id="ref-21"><a href="https://news.maryland.gov/dnr/2026/01/07/saving-your-space-maryland-state-parks-day-use-reservation-system-cuts-closures-readies-expansion-for-2026/">Saving Your Space: Maryland State Parks' Day-Use Reservation System Cuts Closures — Maryland DNR</a></li>
  <li id="ref-22"><a href="https://www.citybiz.co/article/765656/nea-leads-21-million-investment-in-kaizen-a-startup-modernizing-americas-public-services/">NEA Leads $21 Million Investment in Kaizen — CityBiz</a></li>
  <li id="ref-23"><a href="https://www.whitehouse.gov/fact-sheets/2025/08/fact-sheet-president-donald-j-trump-improves-our-nation-through-better-design/">Fact Sheet: President Trump Improves Our Nation Through Better Design — The White House</a></li>
  <li id="ref-24"><a href="https://federalnewsnetwork.com/it-modernization/2026/01/national-design-studio-looks-to-overhaul-27000-federal-websites-and-is-hiring-a-team-to-do-it/">National Design Studio Looks to Overhaul 27,000 Federal Websites — Federal News Network</a></li>
  <li id="ref-25"><a href="https://govspend.com/blog/doge-terminations-in-fy25-what-the-numbers-say-and-whats-still-to-come/">DOGE Contract Terminations in 2025 — GovSpend</a></li>
  <li id="ref-26"><a href="https://www.startus-insights.com/innovators-guide/govtech-outlook/">GovTech Outlook 2025: Industry Data & Innovation Insights — StartUs Insights</a></li>
</ol>
