'use client'
import type { ReturnType, Validated } from '@type/Validations'
import { useTranslations } from 'next-intl'
import {
  isIban,
  isRealNationalCode,
  isLegalNationalCode,
  isNationalCode
} from '@assets/validations'

export default function () {
  const t = useTranslations('errors.validations')

  function required(value = true): ReturnType<boolean> {
    return { value, message: t('required') }
  }

  function maxLength(value: number): ReturnType<number> {
    return { value, message: t('max_length', { length: value }) }
  }

  function minLength(value: number): ReturnType<number> {
    return { value, message: t('min_length', { length: value }) }
  }

  function pattern(value: RegExp): ReturnType<RegExp> {
    return { value, message: t('pattern') }
  }

  function iban(val: string | null): Validated {
    return !val || isIban(val) || t('iban')
  }

  function realNationalCode(val: string | null): Validated {
    return !val || isRealNationalCode(val) || t('realNationalCode')
  }

  
  function legalNationalCode(val: string | null): Validated {
    return !val || isLegalNationalCode(val) || t('legalNationalCode')
  }


    function nationalCode(val: string | null): Validated {
      return !val || isNationalCode(val) || t('nationalCode')
    }

  return {
    required,
    maxLength,
    minLength,
    pattern,
    iban,
    realNationalCode,
    legalNationalCode,
    nationalCode
  }
}