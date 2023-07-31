# Class 16 reading notes

#### [HOME](https://cesarderio.github.io/reading-notes/)

## Cloud Identity and Access Management (IAM) with AWS

Below you will find reading materials and additional resources that support today’s topic and the upcoming lecture.

## Reading

[Lessons Learned from the Capital One Data Breach (PDF)](https://www.zscaler.com/resources/white-papers/capital-one-data-breach.pdf)

What were the three commands used for the attack?

* Credentials - Executed obtained security credentials \*\*\*\*-WAF-Role account for elevated role access AWS *Web Application Firewall* (WAF)

* List Buckets - Used credentials *\*\*\*\*\*-WAF-Role* account to list files and folders(S3 buckets).

* Download Data - *Used \*\*\*\*\*-WAF-Role* account to download files accessible by credentials.

What misconfiguration of AWS components allowed the attacker to access sensitive data?

* AWS *Web Application Firewall* (WAF)

* Excessive permissions to IAM role allowed the attacker to access to S3 buckets.

* Attacker used AWS temporary access/login service to gain access to the system and request the higher permissions/role.

What are two of the AWS Governance practices that could have prevented such attack?

* *Use CloudTrail, CloudWatch, and/or AWS lambda services to review and automate specific actions taken on S3 resources.*

* *Ensure each application, EC2 instance, or autoscaling group has its own IAM role. Do not share roles across unrelated applications.*

* *Scope the permissions of each role to enable access only to the AWS resources required. The “WAF” role described above did not require access to list S3 buckets “in the normal course of business” (according to the indictment).*

<br>

### Things I want to know more about
