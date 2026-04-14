export const projectDomains = ['All', 'Fintech', 'Healthcare', 'Crypto']

export const projects = [
  {
    id: 1,
    title: 'Partner Lending Integration APIs',
    domain: 'Fintech',
    period: '6 months',
    summary:
      'Enterprise integration APIs connecting lending workflows with major payment service providers for personal and business loan lifecycle management.',
    highlights: [
      'Automated loan application, approval, and decisioning workflows.',
      'Real-time loan tracking for balances, schedules, and servicing.',
      'Processed 150+ disbursals in the first month after release.'
    ],
    architecture: 'Distributed API layer with Azure Service Bus for asynchronous event processing.',
    stack: ['.NET 6/7/8', 'SQL Server', 'PostgreSQL', 'Azure Service Bus']
  },
  {
    id: 2,
    title: 'B2C Experia Portal',
    domain: 'Fintech',
    period: '15 months',
    summary:
      'A customer-centric financial platform for loans, EMIs, and deposits with unified experiences across web properties.',
    highlights: [
      'Implemented SSO across multiple Bajaj Finserv journeys.',
      'Delivered reusable horizontal Offer/Search modules.',
      'Supported compliance-first onboarding for regulated use cases.'
    ],
    architecture: 'MVC and Angular modules integrated with secure identity flows and shared service layer.',
    stack: ['ASP.NET MVC', '.NET 5', 'Angular 10', 'SQL Server', 'Azure']
  },
  {
    id: 3,
    title: 'QR Token Generation System',
    domain: 'Fintech',
    period: '1 month',
    summary: 'Branch-ready system to generate service tokens for high-throughput gold loan branch operations.',
    highlights: [
      'Single-engineer rapid delivery.',
      'Deployed branch token workflow across India.',
      'Optimized backend data structures for token lookups.'
    ],
    architecture: 'Lightweight MVC backend with secure token generation and centralized persistence.',
    stack: ['ASP.NET MVC', '.NET 5', 'SQL Server']
  },
  {
    id: 4,
    title: 'Communication Governance & Campaign Portal',
    domain: 'Fintech',
    period: '6 months',
    summary:
      'In-house communication governance and campaign system for WhatsApp, Email, SMS, and Call Center orchestration.',
    highlights: [
      'Built campaign creation, enable/disable, and monitoring workflows.',
      'Implemented Windows Services for validation, limit checks, and data processing.',
      'Created centralized communication management for multiple departments.'
    ],
    architecture: 'Portal plus background processing services for controlled multi-channel communication delivery.',
    stack: ['.NET 8', 'Windows Services', 'SQL Server', 'PostgreSQL', 'Bootstrap']
  },
  {
    id: 5,
    title: 'Presidio',
    domain: 'Fintech',
    period: '6 months',
    summary:
      'Vendor-ordering platform migrated from legacy ASP.NET to modern .NET Core microservices architecture.',
    highlights: [
      'Migrated monolithic modules into independently deployable services.',
      'Introduced Ocelot API Gateway for centralized routing and access.',
      'Improved maintainability and scalability of order workflows.'
    ],
    architecture: 'Microservices with gateway-based ingress and service isolation.',
    stack: ['C#', '.NET Core API', 'MS SQL', 'Swagger', 'Ocelot API Gateway']
  },
  {
    id: 6,
    title: 'MySelfCare',
    domain: 'Healthcare',
    period: '5 months',
    summary:
      'Healthcare ecosystem with patient portal, admin portal, appointment booking, and video consultation workflows.',
    highlights: [
      'Migrated patient backend from Laravel to .NET Core APIs for mobile reuse.',
      'Enhanced appointment and doctor-patient consultation journeys.',
      'Built Angular admin panel for operational management.'
    ],
    architecture: 'API-first healthcare platform with separate patient and admin experiences.',
    stack: ['C#', '.NET Core API', 'MySQL', 'Angular 7', 'Swagger']
  },
  {
    id: 7,
    title: 'SuccessGyan',
    domain: 'Fintech',
    period: '6 months',
    summary: 'Partner marketing and event-distribution platform for global speakers and campaign tracking.',
    highlights: [
      'Integrated Zoho and Zoom for event and referral workflows.',
      'Built commission calculation engine for partner conversions.',
      'Led requirement approvals and team task management.'
    ],
    architecture: 'Event-driven API and frontend stack with third-party integration pipelines.',
    stack: ['C#', '.NET Core 3.1 API', 'Angular 10', 'JWT', 'Zoho', 'Zoom']
  },
  {
    id: 8,
    title: 'RTTV - Real Time Trade Viewer',
    domain: 'Crypto',
    period: '4 months',
    summary: 'Real-time trade and order visualization platform with client and admin control panels.',
    highlights: [
      'Implemented WebSocket broadcasting for group-based trade visibility.',
      'Developed admin controls for user and group mappings.',
      'Produced technical API/socket request-response documentation.'
    ],
    architecture: 'Low-latency streaming architecture using socket channels and controlled subscription groups.',
    stack: ['C#', '.NET Core 3.1 API', 'Angular 8', 'WebSockets', 'MS SQL']
  },
  {
    id: 9,
    title: 'DigitalTicks & Crex',
    domain: 'Crypto',
    period: '15 months',
    summary:
      'Commodity and crypto exchange platform with high-throughput backend processing and semi-algorithmic trading support.',
    highlights: [
      'Contributed to OMS, RMS, and chart modules.',
      'Designed multithreaded services with RabbitMQ, WebSocket, and caching.',
      'Engineered systems capable of handling up to 100,000 orders/sec.'
    ],
    architecture: 'Event-driven, multithreaded exchange backend tuned for volatility and large transaction volumes.',
    stack: ['C#', '.NET Core Console', 'MS SQL', 'RabbitMQ', 'WebSocket', 'Windows Service']
  }
]
