// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5c37JFQF9NF51zTsbjhZAd
// Component: fJ3jFRC0Umsq

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { SimpleChart } from "@plasmicpkgs/react-chartjs-2";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 5c37JFQF9NF51zTsbjhZAd/projectcss
import sty from "./PlasmicBarchart.module.css"; // plasmic-import: fJ3jFRC0Umsq/css

createPlasmicElementProxy;

export type PlasmicBarchart__VariantMembers = {};
export type PlasmicBarchart__VariantsArgs = {};
type VariantPropType = keyof PlasmicBarchart__VariantsArgs;
export const PlasmicBarchart__VariantProps = new Array<VariantPropType>();

export type PlasmicBarchart__ArgsType = {};
type ArgPropType = keyof PlasmicBarchart__ArgsType;
export const PlasmicBarchart__ArgProps = new Array<ArgPropType>();

export type PlasmicBarchart__OverridesType = {
  root?: Flex__<typeof SimpleChart>;
};

export interface DefaultBarchartProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicBarchart__RenderFunc(props: {
  variants: PlasmicBarchart__VariantsArgs;
  args: PlasmicBarchart__ArgsType;
  overrides: PlasmicBarchart__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  return (
    <SimpleChart
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root
      )}
      data={[
        { label: "/home", value: 186 },
        { label: "/furance/repair", value: 120 },
        { label: "/plumbing", value: 80 },
        { label: "/plumber-near-me", value: 186 },
        { label: "/water-heater-repair", value: 120 },
        { label: "/furnace-replecement", value: 80 },
        { label: "/tankles", value: 80 }
      ]}
      direction={"horizontal"}
      interactive={true}
      labelField={"label"}
      stacked={true}
      title={"Top performing Pages"}
      type={"bar"}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: typeof SimpleChart;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBarchart__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBarchart__VariantsArgs;
    args?: PlasmicBarchart__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBarchart__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicBarchart__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicBarchart__ArgProps,
          internalVariantPropNames: PlasmicBarchart__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicBarchart__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBarchart";
  } else {
    func.displayName = `PlasmicBarchart.${nodeName}`;
  }
  return func;
}

export const PlasmicBarchart = Object.assign(
  // Top-level PlasmicBarchart renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicBarchart
    internalVariantProps: PlasmicBarchart__VariantProps,
    internalArgProps: PlasmicBarchart__ArgProps
  }
);

export default PlasmicBarchart;
/* prettier-ignore-end */