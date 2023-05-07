# Class 11 reading notes

#### [HOME](https://cesarderio.github.io/reading-notes/)

## Data Restoration, Startup Repair, and Secure Disposal

Below you will find some reading material, code samples, and some additional resources that support today’s topic and the upcoming lecture.

## Reading

[SolarwindsMSP: SSD Data Recovery Best Practices](https://www.solarwindsmsp.com/blog/ssd-data-recovery-best-practices)

* **Bad blocks** —storage segments that impede data storage and retrieval functions.(through memory corruption or physical damage)

  * possible key symptoms:
    * Saving, reading, and moving files may result in failure
    * Active applications may operate slowly or frequently crash
    * User may receive prompts to repair file system
    * General performance may decrease(especially with larger files)

  * Best course of action is to run software that searches for physical defects. If the software discovers physical damage, you’ll want to back up essential files and replace your SSD.

* **File system repair** If a computer or file system requires repair but physical defect software shows no damage

  * This could indicate an issue with the connector port
  * Back up files first
    *Then use (Disk Utility - Mac Os)(fsck utility for Linux) to repair the system

* **Crashing** If a computer crashes while booting up but seems to work normally after several reboots, the SSD is probably failing.

  * Run software to assess performance\health of SSD
  * Reinstall OS after data has been cleared on the partition set
  * Short-term fix does not mean SSD won't fail again\soon.

* **Read-only mode** Possible for SSDs to stop functioning except in read-only mode

  * This probably means drive is corrupted
  * Back up important data first before attempting repair

### Recovery options

* **Formatting drive and redownloading operating system**

* **Power cycling the SSD**
  * Unplug SATA data cable, but leave power cable in
  * Leave power on for half an hour, then turn it off for 30 seconds
  * Turn power back on again for another half hour
  * Turn it off for another 30 seconds
  * Turn power back on and reconnect data cable
  * If power cycling has been effective, SSD will be back up

* **Idling in the boot menu**
  * Similar to power cycling, except that while the power is on during the half-hour
  intervals, the computer should be left to idle in boot menu
  * On PC, boot into BIOS and sit at BIOS screen
  * On Mac, get to boot menu by turning on computer while holding down ALT\option key.

* **Updating SSD firmware**
  * Run firmware update tool to check version/for update
  * SSD might be corrupted past point of recovery

* **Updating drivers**
  * In Windows, in Device Manager, go to Disk Drives, right-click SSD to update driver
  * Reboot

### SSD protection best practices

* [Download a program from a selection of existing free software options designed to monitor SSD health by tracking operating temperature and performance metrics.](https://www.solarwindsmsp.com/blog/ssd-data-recovery-best-practices)

* [When investing in a new SSD, buy strategically. Many SSDs come equipped with S.M.A.R.T. (Self-Monitoring, Analysis, and Reporting Technology) that warns users of potential failure and prompts them to take preventative measures.](https://www.solarwindsmsp.com/blog/ssd-data-recovery-best-practices)

* [Have a backup strategy. Backup data regularly and routinely, even if your SSD was purchased recently and appears to be in good health. Unexpected corruption, power surges, viruses, or physical harm could befall your drive and cause permanent data loss. You truly never know what could happen—which is why valuable data should always be duplicated somewhere secure.](https://www.solarwindsmsp.com/blog/ssd-data-recovery-best-practices)

[How to Erase a Hard Drive Using DBAN](https://www.lifewire.com/how-to-erase-a-hard-drive-using-dban-2619148)

* **Download the DBAN program**

* **Save the DBAN ISO file to your computer**

* **Burn DBAN to a disc or USB device**

* **Restart and boot into the DBAN disc or USB device**

* **Choose an option from the DBAN main menu**

* **Immediately start using DBAN with a Quick Command. Choosing F3 from DBAN's main menu will open this Quick Commands screen**

### **DBAN Commands and Data Sanitization Method**

* In bold are the commands DBAN supports, followed by the data sanitization method they use:

  * **dod** - DoD 5220.22-M
  * **dodshort** - Same as dod except only 3 passes are run instead of 7
  * **ops2** - RCMP TSSIT OPS-II
  * **gutmann** - Gutmann
  * **prng** - Random Data
  * **quick** - Write Zero

* **Choose which hard drives to wipe with Interactive Mode**

* **Wait for DBAN to erase the hard drive(s)**

* **Verify DBAN has successfully erased the hard drive(s)**

### Things I want to know more about
