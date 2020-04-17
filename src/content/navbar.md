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
      - name: Robotics Basics
        link: "/classes/robotics-basics"
      - name: Backyard Ballistics
        link: "/classes/backyard-ballistics"
      - name: Project Code 
        link: "/classes/project-code"

  - name: Login or Signup
    user: false
    type: button
    link: "/auth/login"

  - name: My Account
    user: true 
    type: button
    link: "/account"

---