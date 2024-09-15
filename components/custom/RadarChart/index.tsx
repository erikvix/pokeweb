"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A radar chart";

const stats = [
  { name: "HP", value: 40, fullMark: 100 },
  { name: "Attack", value: 50, fullMark: 100 },
  { name: "Defense", value: 45, fullMark: 100 },
  { name: "Sp. Atk", value: 70, fullMark: 100 },
  { name: "Sp. Def", value: 45, fullMark: 100 },
  { name: "Speed", value: 70, fullMark: 100 },
];

const chartConfig = {
  desktop: {
    label: "Hp",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function ChartComponent() {
  return (
    <Card className="border-none mt-4">
      <CardHeader className="items-center pb-4">
        <CardTitle className="text-xl">Stats</CardTitle>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square min-h-[300px] max-h-[250px]"
        >
          <RadarChart data={stats}>
            <PolarAngleAxis
              dataKey="name"
              tick={({ x, y, textAnchor, value, index, ...props }) => {
                const data = stats[index];
                return (
                  <text
                    x={x}
                    y={index === 0 ? y - 10 : y}
                    textAnchor={textAnchor}
                    fontSize={13}
                    fontWeight={500}
                    {...props}
                    className="fill-muted-foreground"
                  >
                    <tspan>{data.name}</tspan>
                    <tspan
                      x={x}
                      dy={"1rem"}
                      fontSize={12}
                      className="fill-muted-foreground"
                    >
                      {data.value}
                    </tspan>
                  </text>
                );
              }}
            />
            <PolarRadiusAxis
              angle={30}
              domain={[0, 100]}
              tick={false}
              axisLine={false}
            />
            <PolarGrid />
            <Radar
              dataKey="value"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
