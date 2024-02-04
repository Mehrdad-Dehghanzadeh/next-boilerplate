import { Buffer } from 'buffer'

/**
 * Encoding base-64
 * ***********************************/
export function encodeBase64(str: string): string {
  return Buffer.from(str).toString('base64')
}

/**
 * Decoding base-64
 * ***********************************/
export function decodeBase64(str: string): string {
  return Buffer.from(str, 'base64').toString()
}

/* File To Base 64
 ***********************************/
export function toBase64(file: any) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}
