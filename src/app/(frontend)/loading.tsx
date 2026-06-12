'use client'
import React, { useEffect } from 'react'

export default function Loading() {
  useEffect(() => {
    // Dispatch event to show the global InitialLoader
    window.dispatchEvent(new Event('START_PAGE_LOADING'))
    
    // Dispatch event to hide the global InitialLoader on unmount
    return () => {
      window.dispatchEvent(new Event('STOP_PAGE_LOADING'))
    }
  }, [])

  // Instantly render a solid blue background to hide any layout shifts before events process
  return <div className="fixed inset-0 z-[999998] bg-[#152238]" />
}
