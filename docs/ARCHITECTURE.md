# Aegis Mesh AI - System Architecture

## Overview

Aegis Mesh AI is a privacy-first, local-first multi-agent AI platform powered by QVAC SDK. It enables intelligent AI workflows, private document analysis, security scanning, local knowledge retrieval, and decentralized mesh inference without relying on cloud AI services.

---

# High Level Architecture

```
User
 |
 v
Aegis Mesh AI Dashboard
 |
 v
Aegis Assistant Chat Interface
 |
 v
Commander Agent
 |
 +------------------------------+
 |                              |
 v                              v
Document Agent              Security Agent
 |
 v
Knowledge Agent
 |
 v
Mesh Agent
 |
 v
QVAC SDK
 |
 v
Psy Local Models
 |
 v
Local AI Inference
 |
 v
Performance Logger
 |
 v
QVAC Evidence & JSON Export
```

---

## Multi-Agent System

### Commander Agent
Acts as the central orchestrator. It analyzes user intent and routes requests to the appropriate specialized agent.

### Document Agent
Handles private document analysis and processing using local AI inference.

### Security Agent
Analyzes suspicious content, phishing attempts, fraud indicators, and security risks.

### Knowledge Agent
Performs local RAG-based search and retrieves private knowledge.

### Mesh Agent
Coordinates distributed AI workloads across trusted edge devices.

---

## QVAC Integration Layer

The QVAC integration layer provides:

- Local model loading
- Psy model inference
- Token performance tracking
- TTFT measurement
- Inference logging

---

## Performance Monitoring

Aegis Mesh AI continuously tracks:

- Tokens per Second (TPS)
- Time To First Token (TTFT)
- Model usage
- Inference history
- Execution logs

---

## Privacy Design

Aegis Mesh AI follows a local-first architecture:

- No cloud AI APIs
- No user data sent to external AI providers
- On-device AI inference
- Private mesh collaboration

---

## Technology Stack

Frontend:
- Next.js
- React
- TypeScript
- Tailwind CSS

AI Layer:
- QVAC SDK
- Psy Local Models

Architecture:
- Multi-Agent System
- Local RAG
- P2P Mesh Inference
- Performance Evidence Logging