"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

export const description = "A radar chart";

interface statsProps {
  stats: Array<{ base_stat: number; stat: { name: string } }>;
}

const chartConfig = {
  desktop: {
    label: "Hp",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function ChartComponent({ stats }: statsProps) {
  const data = stats.map((item) => ({
    stat: item.stat.name,
    value: item.base_stat,
  }));
  return (
    <Card className="border-none mt-4">
      <CardHeader className="items-center pb-4">
        <CardTitle className="text-xl">Stats</CardTitle>
      </CardHeader>
      <CardContent className="pb-0 flex items-center justify-center">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square min-w-[500px] max-h-[250px]"
        >
          <RadarChart
            outerRadius={90}
            className="p-2"
            width={730}
            height={250}
            data={data}
          >
            <PolarAngleAxis
              dataKey="stat.name"
              tick={({ x, y, textAnchor, index, ...props }) => {
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
                    <tspan className="capitalize ">{data.stat.name}</tspan>
                    <tspan
                      x={x}
                      dy={"1rem"}
                      fontSize={12}
                      className="fill-muted-foreground"
                    >
                      {data.base_stat}
                    </tspan>
                  </text>
                );
              }}
            />
            <PolarRadiusAxis
              angle={30}
              domain={[0, 150]}
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
