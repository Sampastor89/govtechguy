---
title: "Government Is Already Building You a Customer Profile"
description: "Salesforce, Microsoft, and a dozen 311 vendors already sell governments a 'customer 360' for citizens. Here's what exists, why it makes sense, and the much bigger CRM problem hiding on the vendor side."
pubDate: "Oct 01 2026"
heroImage: "../../assets/government-crm-citizen-as-customer.png"
---

Salesforce has a product called Government Cloud, built around something it markets as "Constituent 360" — one unified profile per citizen, pulling together case history, service requests, and every touchpoint across departments. It's generated over [$2.6 billion in federal contracts over the past five years](https://kcloudtechnologies.com/salesforce-cloud-for-public-sector/). This isn't a thought experiment. Government CRM is already a real product category, and it's already being sold at scale.

The premise is the same one every retailer and bank figured out decades ago: treat the person as a customer, and manage every interaction they have with you in one record instead of starting from zero each time they show up.

## What's Already Live

The clearest version of this today is at the city level. [311 platforms](https://www.civicplus.com/blog/crm/what-is-a-311-and-citizen-request-management-solution/) from vendors like CivicPlus, Accela, and SeeClickFix merge pothole complaints, code enforcement cases, and permit applications into a single shared record. A staffer pulling up a resident's file sees all of it — not just the ticket they called about. That's a real "customer 360," just scoped to one city.

Salesforce and Microsoft Dynamics 365 Government are selling the bigger version of the same idea to state and federal agencies: [one constituent profile, configurable case management, interaction history tied to a person](https://monday.com/blog/crm-and-sales/crm-for-government/) instead of to whichever department happens to answer the phone.

## The Login Is the Easy Part

The piece that actually spans levels of government is identity, not case data. [Login.gov](https://en.wikipedia.org/wiki/Login.gov) has existed since Congress mandated a single sign-on platform in 2015, and as of last year it was used by [nearly 50 agencies and states](https://fedscoop.com/login-gov-facing-technical-difficulties-cost-uncertainty/). In August, OMB gave agencies [two years to make it the standard sign-in for every public-facing federal website](https://federalnewsnetwork.com/technology-main/2026/08/omb-lays-out-two-year-move-to-single-sign-on-using-login-gov/).

That sounds like the unification citizens actually want. It isn't, quite. A [GAO review found technical failures, fraud-control gaps, and compliance issues at agencies already using it](https://www.gao.gov/products/gao-25-106640) — and the IRS still hasn't adopted it years after saying it would. If getting agencies to agree on one *login* is this hard, agreeing on one shared *record* behind that login is a much bigger lift.

## Why Citizen-as-Customer Is the Right Idea

One person renews a driver's license with the state, pays property tax to the county, files a building permit with the city, and settles up with the IRS federally. Four separate logins, four separate case histories, zero shared context. Every one of those agencies is, functionally, a vendor the citizen has no choice but to use — and none of them remember the last conversation.

CRM exists in the private sector because no company wants a customer to repeat themselves to five different departments. Government's version of that problem is bigger: 50 states, thousands of counties and cities, and one federal government, almost none of which share a schema, let alone a database.

## The Other Half: Government Has Customers, Too

Here's the part that gets less attention. Government isn't just managing citizens — it's managing vendors, at a scale that dwarfs the citizen side. The federal government alone [committed roughly $793 billion to contracts in fiscal year 2025](https://www.gao.gov/blog/snapshot-government-wide-contracting-fy-2025-interactive-dashboard), 61% of it defense.

[SAM.gov](https://en.wikipedia.org/wiki/System_for_Award_Management) is the front door for every company selling to the government — but it's a registry, not a relationship manager. It validates who a vendor is. It doesn't track contract performance, renewal timing, or which agencies a company already works with, the way an actual [supplier relationship management system](https://en.wikipedia.org/wiki/Supplier_relationship_management) would.

That gap is exactly the business model behind [companies like Carahsoft](https://govtechguy.com/blog/carahsoft-federal-procurement/) — they built the vendor CRM government never built for itself, and they charge a margin for access to it. A real vendor-side CRM, with visibility into performance and relationships across agencies, would be worth at least as much as the citizen-facing version. Arguably more, given the dollar volume involved.

## The Catch

None of this talks to itself across levels of government. Login.gov can give a citizen one password. It can't make the county's Accela instance aware of what the state's Salesforce org already knows. Citizen-as-customer is the right instinct — it's just capped at the edge of whatever single agency bought the software.

Right now, nobody has one government account. They have as many as there are agencies that signed a contract.
