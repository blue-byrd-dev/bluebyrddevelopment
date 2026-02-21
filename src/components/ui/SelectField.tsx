"use client";

import * as Select from "@radix-ui/react-select";
import { FaChevronDown, FaCheck } from "react-icons/fa";

type Option = { label: string; value: string };

type Props = {
	// label: string;
	value: string;
	onChange: (value: string) => void;
	placeholder: string;
	options: Option[];
};

export default function SelectField({
	value,
	onChange,
	placeholder,
	options,
}: Props) {
	return (
		<label className="block">
			<Select.Root value={value} onValueChange={onChange}>
				<Select.Trigger
					className="
            mt-2 w-full
            inline-flex items-center justify-between
            rounded-xl border border-[rgb(var(--border))]
            bg-[rgb(var(--bbd-bg))] text-[rgb(var(--bbd-fg))]
            px-4 py-3
            focus:outline-none focus:ring-2
            focus:ring-[rgb(var(--bbd-secondary))]
          "
					aria-label={value}
				>
					<Select.Value placeholder={placeholder} />
					<Select.Icon className="ml-3 opacity-80">
						<FaChevronDown />
					</Select.Icon>
				</Select.Trigger>

				<Select.Portal>
					<Select.Content
						position="popper"
						className="
              z-50 overflow-hidden rounded-xl border
              border-[rgb(var(--border))]
              bg-(--bbd-bg)
              text-(--bbd-fg)
              shadow-xl
              w-(--radix-select-trigger-width)
            "
					>
						<Select.Viewport className="p-1">
							{options.map((opt) => (
								<Select.Item
									key={opt.value}
									value={opt.value}
									className="
                    relative flex cursor-pointer select-none items-center
                    rounded-lg px-3 py-2 text-sm
                    outline-none
                    data-highlighted:bg-[rgb(var(--bbd-card))]
                  "
								>
									<Select.ItemText>{opt.label}</Select.ItemText>
									<Select.ItemIndicator className="absolute right-3">
										<FaCheck className="h-3.5 w-3.5 opacity-80" />
									</Select.ItemIndicator>
								</Select.Item>
							))}
						</Select.Viewport>
					</Select.Content>
				</Select.Portal>
			</Select.Root>
		</label>
	);
}
