---
for: navbar
content:
  - name: Home
    type: item
    link: "/"
  - name: About
    type: dropdown
    items:
      - name: About Us
        link: "/about"
      - name: FAQ
        link: "/faq"
      - name: Contact
        link: "/contact"
  - name: Classes
    type: dropdown
    items:
      - name: Overview
        link: "/classes"
      - name: Program Principles
        link: "/classes/program-principles"
      - name: Project Code 
        link: "/classes/project-code"
      - name: Mech Prototyping
        link: "/classes/mech-prototyping"
      - name: Intro to Robotics
        link: "/classes/robotics-intro"
      - name: Robotics Expanded
        link: "/classes/robotics-expanded"
  - name: Summer of Robotics
    type: item
    link: "summer-robotics"

  - name: Contact 
    type: button
    link: "/contact"
    user: none

  # - name: Preregister
  #   type: button
  #   link: "/preregister"

  # - name: Login or Signup
  #   user: false
  #   type: button
    # link: "/auth/login"

  # - name: My Account
  #   user: true 
  #   type: button
  #   link: "/account"

---