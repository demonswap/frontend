import React from 'react'
import { Text } from '@demonswap/uikit'
import { useTranslation } from 'contexts/Localization'

const BondlyWarning = () => {
  const { t } = useTranslation()

  return <Text>{t('Warning: BONDLY has been compromised. Please remove liquidity until further notice.')}</Text>
}

export default BondlyWarning
