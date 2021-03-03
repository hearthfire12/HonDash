# s300 device ids
S3003_ID_VENDOR = 0x1C40
S3003_ID_PRODUCT = 0x0432

S3003_ID = 3

# command 0x90
S3003_RPM1 = 3
S3003_RPM2 = 4
S3003_VSS1 = 5
S3003_VSS2 = 6
S3003_MAP1 = 7
S3003_MAP2 = 8
S3003_TPS = 9
S3003_INJ1 = 10 #AJ
S3003_INJ2 = 11 #AJ
S3003_ADV = 12 #AJ 
S3003_KLEVEL = 15 #maybe #AJ
S3003_O2V = 16 #AJ
S3003_DISTERR = 17 # bit6 (0x40) #AJ 
S3003_SCS = 17 # bit5 (0x20) #AJ  
S3003_PSP = 17 # bit4 (0x10) #AJ
S3003_REVL = 17 # bit3 (0x08) #AJ
S3003_BKSW = 17 # bit2 (0X04) #AJ
S3003_ACSW = 17 # bit1 (0X02) #AJ
S3003_VTP = 17 # bit0 (0x01) #AJ
S3003_ALTC = 18 # bit7 (0x80) #AJ
S3003_IAB = 18 # bit6 (0x40) #AJ
S3003_MIL = 18 # bit5 (0x20) #AJ
S3003_PCS = 18 # bit4 (0x10) #AJ
S3003_ACCL = 18 # bit3 (0x08) #AJ
S3003_FLR = 18 # bit2 (0x04); flag inverted (FALSE = ON)?  #AJ
S3003_VTS = 18 # bit0 (0x01) #AJ
S3003_LNCHC = 19  # bit7 (0x80) #AJ
S3003_LNCHR = 19  # bit6 (0x40) #AJ
S3003_IGNC = 19  # bit5 (0x20) #AJ
S3003_SHFTC = 19  # bit4 (0x10) #AJ
S3003_BSTC = 19  # bit3 (0x08) #AJ
S3003_SECTBL = 20  # bit7 (0x80) #AJ
S3003_DL = 20  # bit4 (0x10) #AJ
S3003_N2ON = 20  # bit3 (0x08) #AJ
S3003_N2ARM = 20 # bit2 (0x04) #AJ
S3003_N1ON = 20  # bit1 (0x02) #AJ
S3003_N1ARM = 20 # bit0 (0x01) #AJ
S3003_DUTY1 = 21 #AJ
S3003_DUTY2 = 22 #AJ
S3003_GEAR = 27
S3003_STRIM = 29 #AJ
S3003_LTRIM = 31 # probably; needs verification in-car #AJ
S3003_BARO = 32 #AJ
S3003_ECT = 33
S3003_IAT = 34
S3003_ELD = 35 #AJ
S3003_BAT = 36
S3003_EGRLV = 44 #AJ
S3003_IATC = 45 #AJ
S3003_ECTC = 46 #AJ
S3003_PWM = 48 #AJ
S3003_SECINJ = 49 # bit5 (0x20)
S3003_A10 = 49 # bit4 (0x10)
S3003_CL = 49 # bit2 (0x04)
S3003_FANC = 49 # bit0 (0x01)
S3003_N3ON = 50  # bit1 (0x02)
S3003_N3ARM = 50 # bit0 (0x01)
S3003_B6V = 53 #AJ
S3003_AFR = 55
S3003_WBV = 56 #AJ

# command 0xB0
S3003_AN0_1 = 3 #AJ
S3003_AN0_2 = 2 #AJ
S3003_AN1_1 = 5 #AJ
S3003_AN1_2 = 4 #AJ
S3003_AN2_1 = 7 #AJ
S3003_AN2_2 = 6 #AJ
S3003_AN3_1 = 9 #AJ
S3003_AN3_2 = 8 #AJ
S3003_AN4_1 = 11 #AJ
S3003_AN4_2 = 10 #AJ
S3003_AN5_1 = 13 #AJ
S3003_AN5_2 = 12 #AJ
S3003_AN6_1 = 15 #AJ
S3003_AN6_2 = 14 #AJ
S3003_AN7_1 = 17 #AJ
S3003_AN7_2 = 16 #AJ 
S3003_ETH = 18
S3003_FLT = 20

# command 0x40
S3003_IGN = 2 #maybe #AJ
S3003_SERIAL1 = 4
S3003_SERIAL2 = 5
S3003_FIRM1 = 6
S3003_FIRM2 = 7

#Unfound Possible S300 Channels, AJ:
S3003_ECU_TYPE = 0
S3003_KRTD = 0
S3003_FRAME = 0

S3003_ANALOG1 = 0
S3003_ANALOG2 = 0