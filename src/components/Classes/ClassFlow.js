import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery, Link } from 'gatsby'
import { ArcherContainer, ArcherElement } from 'react-archer'

const ClassFlow = () => (
  <ArcherContainer strokeColor='#999999'>
    <div className='archer-row'>
      <ArcherElement
        id="mech1"
        relations={[{
          targetId: 'robo1',
          targetAnchor: 'top',
          sourceAnchor: 'bottom',
          style: {strokeColor:'#ffd900'}
        }]}
      >
        <Link to='/classes/mech-prototyping'>
          <div className='box flow-box is-mech'>
            Mechanism Prototyping
          </div>
        </Link>
      </ArcherElement>
      <ArcherElement
        id="code1"
        relations={[{
          targetId: 'code2',
          targetAnchor: 'top',
          sourceAnchor: 'bottom',
          style: {strokeColor:'#ff3388'}
        }, {
          targetId: 'robo1',
          targetAnchor: 'top',
          sourceAnchor: 'bottom',
          style: {strokeColor:'#ffa600'}
        }]}
      >
        <Link to='/classes/program-principles'>
          <div className='box flow-box is-code'>
            Programming Principles
          </div>
        </Link>
      </ArcherElement>
    </div>

    <div className='archer-row'>
      <ArcherElement
        id="robo1"
        relations={[{
          targetId: 'robo2',
          targetAnchor: 'top',
          sourceAnchor: 'bottom',
          style: {strokeColor:'#ffa600'}
        }]}
      >
        <Link to='/classes/robotics-intro'>
          <div className='box flow-box is-robo'>
            Intro to Robotics
          </div>
        </Link>
      </ArcherElement>
      <ArcherElement
        id="code2"
        relations={[]}
      >
        <Link to='/classes/project-code'>
          <div className='box flow-box is-code'>
            Project Code
          </div>
        </Link>
      </ArcherElement>
    </div>
    <div className='archer-row'>
      <ArcherElement
        id="robo2"
        relations={[]}
      >
        <Link to='/classes/robotics-expanded'>
          <div className='box flow-box is-robo'>
            Robotics Expanded
          </div>
        </Link>
      </ArcherElement>
    </div>

  </ArcherContainer>
)

export default ClassFlow 