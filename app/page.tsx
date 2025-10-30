'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState('1000000')
  const [interestRate, setInterestRate] = useState('4.5')
  const [loanTerm, setLoanTerm] = useState('30')
  const [downPayment, setDownPayment] = useState('200000')
  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const [totalPayment, setTotalPayment] = useState(0)
  const [totalInterest, setTotalInterest] = useState(0)

  const calculateMortgage = () => {
    const principal = parseFloat(loanAmount) - parseFloat(downPayment)
    const monthlyRate = parseFloat(interestRate) / 100 / 12
    const numberOfPayments = parseFloat(loanTerm) * 12

    if (principal <= 0 || monthlyRate <= 0 || numberOfPayments <= 0) {
      return
    }

    const x = Math.pow(1 + monthlyRate, numberOfPayments)
    const monthly = principal * monthlyRate * x / (x - 1)
    const total = monthly * numberOfPayments
    const interest = total - principal

    setMonthlyPayment(monthly)
    setTotalPayment(total)
    setTotalInterest(interest)
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('zh-CN', {
      style: 'currency',
      currency: 'CNY',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">房贷计算器</h1>
          <p className="text-lg text-gray-600">计算您的月供和总还款金额</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* 输入表单 */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>贷款信息</CardTitle>
              <CardDescription>请输入您的贷款详细信息</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="loanAmount">贷款总额 (元)</Label>
                <Input
                  id="loanAmount"
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  placeholder="请输入贷款总额"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="downPayment">首付金额 (元)</Label>
                <Input
                  id="downPayment"
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(e.target.value)}
                  placeholder="请输入首付金额"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="interestRate">贷款利率 (%)</Label>
                <Input
                  id="interestRate"
                  type="number"
                  step="0.01"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  placeholder="请输入贷款利率"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="loanTerm">贷款年限 (年)</Label>
                <Input
                  id="loanTerm"
                  type="number"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(e.target.value)}
                  placeholder="请输入贷款年限"
                />
              </div>

              <Button 
                onClick={calculateMortgage}
                className="w-full bg-blue-600 hover:bg-blue-700"
                size="lg"
              >
                计算月供
              </Button>
            </CardContent>
          </Card>

          {/* 计算结果 */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>计算结果</CardTitle>
              <CardDescription>基于您输入的信息计算得出</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-blue-600">
                    {formatCurrency(monthlyPayment)}
                  </div>
                  <div className="text-sm text-gray-600">每月还款金额</div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-medium text-gray-900">贷款总额</div>
                    <div className="text-gray-600">{formatCurrency(parseFloat(loanAmount))}</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">首付金额</div>
                    <div className="text-gray-600">{formatCurrency(parseFloat(downPayment))}</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">实际贷款</div>
                    <div className="text-gray-600">{formatCurrency(parseFloat(loanAmount) - parseFloat(downPayment))}</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">贷款年限</div>
                    <div className="text-gray-600">{loanTerm} 年</div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">总还款金额</span>
                  <span className="font-semibold">{formatCurrency(totalPayment)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">总支付利息</span>
                  <span className="font-semibold text-red-600">{formatCurrency(totalInterest)}</span>
                </div>
                <div className="flex justify-between items-center border-t pt-3">
                  <span className="text-gray-600 font-medium">还款总额</span>
                  <span className="font-bold text-lg text-green-600">{formatCurrency(totalPayment + parseFloat(downPayment))}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 说明信息 */}
        <Card className="mt-8 shadow-lg">
          <CardHeader>
            <CardTitle>使用说明</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 贷款总额：您需要贷款的金额</li>
              <li>• 首付金额：购房时支付的首付款</li>
              <li>• 贷款利率：年化利率，如4.5%表示年利率4.5%</li>
              <li>• 贷款年限：贷款的还款期限，通常为10-30年</li>
              <li>• 计算结果仅供参考，实际贷款金额以银行审批为准</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}