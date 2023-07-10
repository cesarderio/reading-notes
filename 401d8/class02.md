# Class 02 reading notes

#### [HOME](https://cesarderio.github.io/reading-notes/)

## Cloud Security Principles and Frameworks

Below you will find reading materials and additional resources that support today’s topic and the upcoming lecture.

## Reading

[AWS Architecture Blog - Compute Abstractions on AWS: A Visual Story](https://aws.amazon.com/blogs/architecture/compute-abstractions-on-aws-a-visual-story/)

Explain the levels of abstraction in AWS to someone without a technical background.

* Infrastructure Level: The physical hardware and equipment that supports everything in the cloud. (computer/servers)

* Compute Level: A "virtual computer" you can use to run programs and applications without worry/messing with the actual computer hardware.(servers/Infrastructure level)

* Service Level: AWS offers ready-to-use services for specific tasks, like databases, storage, and artificial intelligence.
  * Instead of building everything from scratch, you can use these pre-built tools/applications/etc..

* Application Level: Where you build and deploy the software using AWS's tools.

*Each level builds on top of the previous one, allowing you to use more advanced services while hiding the complicated technical details.*

What are the control plane and data plane responsible for in container abstraction?

* Control Plane:
  * The control plane manages and controls containers.
  * It handles tasks like deploying, scaling, and monitoring containers.
  * It assigns resources to containers, ensures they work together, and distributes network traffic.
  * It also monitors container health and takes necessary actions when containers fail.

* Data Plane:
  * The data plane executes containers and handles their data flow.
  * It launches, stops, and manages the lifecycle of containers.
  * It provides an isolated environment for containers and manages their networking and storage.
  * It enables containers to communicate with each other and access external services.

Where does AWS Lambda fall in the layers of abstraction and what makes it so special?

* AWS Lambda falls under the "Application Level" in the layers of abstraction.
  * Serverless Computing
  * Event-Driven Execution
  * Automatic Scaling
  * Language Flexibility
  * Seamless Integration

## Bookmark and Review

* [13 Compliance Frameworks for Cloud-based Orgs](https://www.horangi.com/blog/13-compliance-frameworks-for-cloud-based-organizations)

* [Cloud Security Alliance (CSA)](https://cloudsecurityalliance.org/)

  * [Cloud Controls Matrix (CCM)](https://cloudsecurityalliance.org/research/cloud-controls-matrix/)

  * [CSA Security Guidance for Cloud Computing](https://cloudsecurityalliance.org/research/guidance/)

### Things I want to know more about
