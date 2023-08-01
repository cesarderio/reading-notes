# Class 19 reading notes

#### [HOME](https://cesarderio.github.io/reading-notes/)

## Cloud Detective Controls

Below you will find reading materials and additional resources that support today’s topic and the upcoming lecture.

## Reading

[What is Amazon GuardDuty?](https://docs.aws.amazon.com/guardduty/latest/ug/what-is-guardduty.html)

## Videos

[AWS re:Inforce 2019: Threat Detection on AWS: An Introduction to Amazon GuardDuty (FND216)](https://www.youtube.com/watch?v=czsuZXQvD8E&ab_channel=AmazonWebServices)

What are some of the IoCs that GuardDuty can detect?

* **Odd API Calls:** It spots if API calls are coming from strange locations or are happening too often.

* **Scanning Attempts:** Can tell if someone is trying to find and potentially exploit resources.

* **Malware Connections:** Can spot if instances are communicating with servers linked to malware.

* **Attack Attempts:** Can see attempts to access open ports or use brute force attacks.

* **Odd IAM User Behavior:** GuardDuty can alert if an IAM user's behavior is different from what is expected.

* **Data Leaks:** Can detect signs of data being moved in or out of AWS environment in a strange way.

* **Unexpected Changes:** It can notice changes made to the infrastructure.

What are some of the data sources which GuardDuty can use?

* **AWS CloudTrail Event Logs:** API calls/logs are used to detect/identify anomalies.

* **DNS Logs:** Uses DNS query logs to detect malicious or unauthorized activity.

* **VPC Flow Logs:** These provide a record of all IP traffic going to and from network interfaces in your Virtual Private Cloud (VPC). They can help detect unusual traffic patterns or communication with malicious IP addresses.

How does GuardDuty use access behavior to spot potential malicious activity?

* It uses machine learning to get a baseline for what is expected behavior of users/systems. Then it will alert any behavior that does not match the expected behavior.

<br>

### Things I want to know more about
