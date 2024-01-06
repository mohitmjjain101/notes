###### What are the Microservices?

Microservices, or microservices architecture, is an approach to the design and implementation of enterprise applications in which a large application is built from modular components or services.

Each module supports a specific task or business goal and uses a well-defined communications interface, such as an application programming interface (API), to communicate with other modules and services.

In a microservices architecture, an application is divided into distinct tasks and services. Each task or service is created independently, and each one runs a unique process and usually manages its own database.


###### Microservices architecture and design characteristics

* Unique components - Services are designed and deployed as individual components
* Decentralized - Unique microservices components have few if any dependencies, although loose coupling requires frequent and extensive communication between components.
* Resilient - Services are designed for maximum fault tolerance. A single service failure shouldn't disable an entire application.
* API-based - A microservices architecture relies on APIs and API gateways to facilitate communication between components and other applications.
* Data Sepration - Each service accesses its own database or storage volume.
* Automation - Microservices application components can be many -- and can be cumbersome to deploy manually. Microservices rely on automation and orchestration technologies for component deployment and scaling.

###### Benefits of a microservices architecture

* Independence - Every microservice module or service can be developed using different languages and tools and deployed on different platforms.
* Lifecycles - That development and deployment independence means different development teams commonly build and maintain microservices components through continuous integration and continuous development (CI/CD) pipelines.
* Isolation - Since each component of a microservices application operates independently, it's far easier to monitor the health and performance of each component and oversee the operation of the greater application. This isolation also makes it easier to identify and remediate faults such as restarting a failed module.
* Scalability - To scale a traditional monolithic application, IT staff must deploy a new copy of the entire application. With a microservices application, only the associated components must scale. It's faster and far less resource-intensive to deploy and load balance a few containers rather than an entire monolithic application.
* Speed - Each microservices component is small, letting developers design, code, test and update a component in far less time than a traditional monolithic application design.

###### Challenges of a microservices architecture

* Unnecessary complexity. Not all applications are suited for a microservices paradigm. The investment needed to apply microservices techniques to smaller and simpler applications might not yield worthwhile benefits. Consider the nature, complexity and scope of each project and evaluate the pros and cons of a microservices approach before making that design commitment.

* Performance. A microservice container provides excellent computing performance for its task, but many of them must communicate across the network for the overall application to function. Network congestion and latency can hamper performance and undo those individual performance benefits. In addition, the volume of microservices to support applications needs additional network management and control and can require multiple load-balancing instances.

* Network limitations. Microservices components rely on API-driven communication over a network. This can place significant stress on existing corporate networks in terms of bandwidth and latency -- which can be further multiplied by numerous microservices applications all working simultaneously across the corporate environment and infrastructure. Some microservices adopters might require network upgrades to support the communication demands of busy microservices applications. Further, network vulnerabilities and security risks can easily be exacerbated in complex microservices environments.

* Monitoring. A microservices application environment can be extremely complex, and all the components deployed to construct the application must be monitored and reported. This challenge is exacerbated by the ethereal nature of those components, which must be monitored as they are deployed and removed. This requires a high level of health and performance monitoring, as well as automation and orchestration.

* Security. Application security is vital to protect access to the software and underlying data, but security can be more difficult with microservices. APIs must authorize and authenticate with every call, and each component must harden the service against intrusion. Security tools and processes must monitor and report in a complex and changeable microservices environment. Extensive automation is needed to attach security configuration and monitoring to each microservices component. Further, each component module must receive suitable patches and updates to maintain consistent security across the application -- which can be difficult when modules are maintained by different teams on different schedules.

* Culture. Microservices development represents a new mindset on how to design, build and operate enterprise applications. This means a business must adjust not only the developer tools and processes they use, but also foster programming skills and team culture to support microservices. Developers must collaborate as they work on different services, and embrace continuous development paradigms, comprehensive process and workflow automation practices and monitoring and security.

###### References
https://www.techtarget.com/searchapparchitecture/definition/microservices
https://www.theserverside.com/answer/What-are-some-benefits-of-a-microservices-architecture?_gl=1*187adag*_ga*MTUwMDcyMjI1Mi4xNzA0MjgwODcw*_ga_TQKE4GS5P9*MTcwNDM4NzEyNi4yLjEuMTcwNDM4NzM2My4wLjAuMA..&_ga=2.210542032.451573129.1704387126-1500722252.1704280870