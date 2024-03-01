'use client'
import type { ReturnType, Validated } from '@type/Validations'
import { useTranslations } from 'next-intl'
import {
  isIban,
  isRealNationalCode,
  isLegalNationalCode,
  isNationalCode,
  isEmail,
  checkPhone,
  checkMobile
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

  function email(val: string | null): Validated {
    return !val || isEmail(val) || t('email')
  }

  function mobile(val: string | null): Validated {
    return !val || checkMobile(val) || t('mobile')
  }

  function phone(val: string | null): Validated {
    return !val || checkPhone(val) || t('phone')
  }

  function emailOrMobile(val: string | null): Validated {
    return !val || isEmail(val) || checkMobile(val) || t('emailOrMobile')
  }

  function equal(equalValue: string | number | null, name: string) {
    return (val: string | number | null): Validated =>
      !val || equalValue == val || t('equal', { name })
  }

  return {
    required,
    maxLength,
    minLength,
    pattern,
    iban,
    realNationalCode,
    legalNationalCode,
    nationalCode,
    email,
    mobile,
    phone,
    emailOrMobile,
    equal
  }
}
