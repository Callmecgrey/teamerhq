"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface PlanStepProps {
  selectedPlan: string;
  setSelectedPlan: (plan: string) => void;
  onFinalSubmit: () => void;
}

const plans = [
  {
    name: "Free",
    price: "0",
    description: "Perfect for individuals and small teams getting started"
  },
  {
    name: "Startup",
    price: "25.99",
    popular: true,
    description: "Ideal for growing teams needing more power"
  },
  {
    name: "Plus",
    price: "99.99",
    description: "Best for larger teams requiring full capabilities"
  }
];

export const PlanStep = ({ selectedPlan, setSelectedPlan, onFinalSubmit }: PlanStepProps) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Choose your plan</h3>
        <Link 
          href="/pricing/compare" 
          target="_blank"
          className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          Compare plans →
        </Link>
      </div>
      
      <div className="grid gap-4">
        {plans.map((plan) => (
          <Card 
            key={plan.name}
            className={`relative cursor-pointer transition-all ${
              selectedPlan === plan.name 
                ? "ring-2 ring-blue-600 dark:ring-blue-400" 
                : "hover:shadow-md"
            }`}
            onClick={() => setSelectedPlan(plan.name)}
          >
            {plan.popular && (
              <div className="absolute -top-3 -right-3">
                <span className="px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full">
                  Popular
                </span>
              </div>
            )}
            <CardHeader className="pb-4">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-lg">{plan.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold">${plan.price}</span>
                  {plan.price !== "0" && (
                    <span className="text-sm text-muted-foreground">/mo</span>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <Link
                href="/pricing"
                target="_blank"
                className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                View features
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button
        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
        onClick={onFinalSubmit}
        disabled={!selectedPlan}
      >
        {selectedPlan === "Free" 
          ? "Start with Free plan" 
          : "Start 14-day free trial"}
      </Button>
      
      {selectedPlan && selectedPlan !== "Free" && (
        <p className="text-center text-sm text-muted-foreground">
          No credit card required
        </p>
      )}
    </div>
  );
}